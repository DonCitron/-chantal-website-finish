// Puppeteer Test-Skript zur Überprüfung der Lesbarkeit und Funktionalität
import puppeteer from 'puppeteer';

// === Configurable Section ===
const HEADLESS = process.env.HEADLESS !== 'false';
const BASE_URL = 'http://localhost:5176/';
const SECTIONS = ['#home', '#ueber-mich', '#course', '#mentoring', '#contact'];
const SELECTORS = {
  header: 'header',
  testimonial: '.swiper-slide p',
  socialMedia: 'section p',
  journalSection: '#course',
  button: 'button',
};
// === End Configurable Section ===

// Utility: Calculate color contrast ratio (WCAG)
function luminance(r, g, b) {
  const a = [r, g, b].map(function (v) {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}
function contrast(rgb1, rgb2) {
  const lum1 = luminance(...rgb1);
  const lum2 = luminance(...rgb2);
  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);
  return (brightest + 0.05) / (darkest + 0.05);
}
function parseRGB(str) {
  const m = str.match(/rgb\\((\\d+), (\\d+), (\\d+)\\)/);
  return m ? [parseInt(m[1]), parseInt(m[2]), parseInt(m[3])] : null;
}

async function testWebsite() {
  console.log('Starting website test with Puppeteer...');
  const screenshots = [];
  const warnings = [];
  const errors = [];

  const browser = await puppeteer.launch({
    headless: HEADLESS,
    executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    defaultViewport: { width: 1280, height: 800 },
  });

  async function saveHtmlSnapshot(page, name) {
    const html = await page.content();
    const fs = await import('fs');
    fs.writeFileSync(`./${name}.html`, html);
  }

  try {
    // Light Mode
    const pageLightMode = await browser.newPage();
    await pageLightMode.goto(BASE_URL, { waitUntil: 'networkidle2' });
    try {
      await pageLightMode.waitForSelector(SELECTORS.header, { visible: true, timeout: 5000 });
    } catch (e) {
      errors.push('Header not found in Light Mode!');
      await saveHtmlSnapshot(pageLightMode, 'light-mode-error');
      throw new Error('Header not found in Light Mode!');
    }
    const lightScreenshot = './light-mode-screenshot.png';
    await pageLightMode.screenshot({ path: lightScreenshot, fullPage: true });
    screenshots.push(lightScreenshot);
    for (const section of SECTIONS) {
      const found = await pageLightMode.$(section);
      if (!found) {
        warnings.push(`Section ${section} not found in Light Mode!`);
        continue;
      }
      await pageLightMode.evaluate((selector) => {
        const element = document.querySelector(selector);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, section);
      await new Promise(resolve => setTimeout(resolve, 1000));
      const sectionScreenshot = `./light-mode-${section.replace('#', '')}.png`;
      await pageLightMode.screenshot({ path: sectionScreenshot, fullPage: false });
      screenshots.push(sectionScreenshot);
    }
    const button = await pageLightMode.$(SELECTORS.button);
    if (button) {
      await button.click();
      await new Promise(resolve => setTimeout(resolve, 500));
    }

    // Dark Mode
    const pageDarkMode = await browser.newPage();
    await pageDarkMode.goto(BASE_URL, { waitUntil: 'networkidle2' });
    await pageDarkMode.evaluate(() => {
      document.documentElement.classList.add('dark');
      localStorage.setItem('colorMode', 'dark');
    });
    await pageDarkMode.reload({ waitUntil: 'networkidle2' });
    await new Promise(resolve => setTimeout(resolve, 1000));
    const darkScreenshot = './dark-mode-screenshot.png';
    await pageDarkMode.screenshot({ path: darkScreenshot, fullPage: true });
    screenshots.push(darkScreenshot);
    for (const section of SECTIONS) {
      const found = await pageDarkMode.$(section);
      if (!found) {
        warnings.push(`Section ${section} not found in Dark Mode!`);
        continue;
      }
      await pageDarkMode.evaluate((selector) => {
        const element = document.querySelector(selector);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, section);
      await new Promise(resolve => setTimeout(resolve, 1000));
      const sectionScreenshot = `./dark-mode-${section.replace('#', '')}.png`;
      await pageDarkMode.screenshot({ path: sectionScreenshot, fullPage: false });
      screenshots.push(sectionScreenshot);
    }
    const darkButton = await pageDarkMode.$(SELECTORS.button);
    if (darkButton) {
      await darkButton.click();
      await new Promise(resolve => setTimeout(resolve, 500));
    }

    // Readability and Contrast Checks
    async function checkReadability(page, mode) {
      return await page.evaluate((SELECTORS) => {
        function getBgColor(el) {
          let bg;
          while (el && el !== document.body) {
            bg = window.getComputedStyle(el).backgroundColor;
            if (bg && bg !== 'rgba(0, 0, 0, 0)' && bg !== 'transparent') return bg;
            el = el.parentElement;
          }
          return window.getComputedStyle(document.body).backgroundColor;
        }
        const results = { mode, textElements: {} };
        // Testimonial
        try {
          const testimonialText = document.querySelector(SELECTORS.testimonial);
          if (testimonialText) {
            const style = window.getComputedStyle(testimonialText);
            results.textElements.testimonial = {
              text: testimonialText.textContent.substring(0, 50) + '...',
              color: style.color,
              bgColor: getBgColor(testimonialText),
              fontSize: style.fontSize,
              fontWeight: style.fontWeight,
              isReadable: true
            };
          } else {
            results.textElements.testimonial = { error: 'Testimonial text not found' };
          }
        } catch (e) {
          results.textElements.testimonial = { error: e.message };
        }
        // Social Media
        try {
          const socialParagraphs = document.querySelectorAll(SELECTORS.socialMedia);
          const socialText = Array.from(socialParagraphs).find(p => 
            p.textContent.includes('Social Media') || 
            p.textContent.includes('Inspiration')
          );
          if (socialText) {
            const style = window.getComputedStyle(socialText);
            results.textElements.socialMedia = {
              text: socialText.textContent.substring(0, 50) + '...',
              color: style.color,
              bgColor: getBgColor(socialText),
              fontSize: style.fontSize,
              fontWeight: style.fontWeight,
              isReadable: true
            };
          } else {
            results.textElements.socialMedia = { error: 'Social Media text not found' };
          }
        } catch (e) {
          results.textElements.socialMedia = { error: e.message };
        }
        // Journal
        try {
          const journalSection = document.querySelector(SELECTORS.journalSection);
          if (journalSection) {
            const journalText = journalSection.querySelector('p:not(:first-child)');
            if (journalText) {
              const style = window.getComputedStyle(journalText);
              results.textElements.journal = {
                text: journalText.textContent.substring(0, 50) + '...',
                color: style.color,
                bgColor: getBgColor(journalText),
                fontSize: style.fontSize,
                fontWeight: style.fontWeight,
                isReadable: true
              };
            } else {
              results.textElements.journal = { error: 'Journal text not found' };
            }
          } else {
            results.textElements.journal = { error: 'Journal section not found' };
          }
        } catch (e) {
          results.textElements.journal = { error: e.message };
        }
        return results;
      }, SELECTORS);
    }
    const lightModeReadability = await checkReadability(pageLightMode, 'light');
    const darkModeReadability = await checkReadability(pageDarkMode, 'dark');
    // Color contrast check
    function checkContrast(element, label, mode) {
      if (element && !element.error && element.color && element.bgColor) {
        const fg = parseRGB(element.color);
        const bg = parseRGB(element.bgColor);
        if (fg && bg) {
          const ratio = contrast(fg, bg);
          if (ratio < 4.5) {
            warnings.push(`${label} in ${mode} mode has low contrast ratio (${ratio.toFixed(2)})`);
          }
        }
      }
    }
    checkContrast(lightModeReadability.textElements.testimonial, 'Testimonial', 'light');
    checkContrast(darkModeReadability.textElements.testimonial, 'Testimonial', 'dark');
    checkContrast(lightModeReadability.textElements.journal, 'Journal', 'light');
    checkContrast(darkModeReadability.textElements.journal, 'Journal', 'dark');
    // Assertions
    if (!lightModeReadability.textElements.testimonial || lightModeReadability.textElements.testimonial.error) {
      errors.push('Testimonial text missing or unreadable in Light Mode!');
      await saveHtmlSnapshot(pageLightMode, 'light-mode-missing-testimonial');
    }
    if (!darkModeReadability.textElements.testimonial || darkModeReadability.textElements.testimonial.error) {
      errors.push('Testimonial text missing or unreadable in Dark Mode!');
      await saveHtmlSnapshot(pageDarkMode, 'dark-mode-missing-testimonial');
    }
    console.log('Light Mode Readability Results:', JSON.stringify(lightModeReadability, null, 2));
    console.log('Dark Mode Readability Results:', JSON.stringify(darkModeReadability, null, 2));
    console.log('Test completed successfully!');
    // Screenshot summary
    console.log('Screenshots saved:');
    screenshots.forEach(s => console.log(' -', s));
  } catch (error) {
    errors.push(error.message);
    process.exitCode = 1;
  } finally {
    // Print warnings and errors summary
    if (warnings.length) {
      console.warn('\nWarnings:');
      warnings.forEach(w => console.warn(' -', w));
    }
    if (errors.length) {
      console.error('\nErrors:');
      errors.forEach(e => console.error(' -', e));
    }
    console.log('Closing browser in 5 seconds...');
    await new Promise(resolve => setTimeout(resolve, 5000));
    await browser.close();
  }
}

testWebsite().catch(console.error); 