// Einfaches Puppeteer Test-Skript mit ES Module-Syntax
import puppeteer from 'puppeteer';

async function testWebsite() {
  console.log('Starting website test with Puppeteer...');
  
  // Browser starten
  const browser = await puppeteer.launch({
    // headless: true ist der Standard, mit Chromium
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  try {
    // Light Mode testen
    console.log('Testing Light Mode...');
    const page = await browser.newPage();
    await page.goto('http://localhost:5185/', { waitUntil: 'domcontentloaded' });
    
    // Screenshot machen
    console.log('Creating screenshot...');
    await page.screenshot({ path: './website-screenshot.png', fullPage: true });
    
    // Textlesbarkeit prüfen
    console.log('Checking text readability...');
    
    const textReadability = await page.evaluate(() => {
      const results = {};
      
      // Verschiedene Textabschnitte prüfen
      const sectionTypes = [
        { name: 'testimonial', selector: '.swiper-slide p' },
        { name: 'socialMedia', selector: 'section h2 + p' },
        { name: 'journal', selector: '#course p' }
      ];
      
      for (const section of sectionTypes) {
        try {
          const element = document.querySelector(section.selector);
          if (element) {
            const style = window.getComputedStyle(element);
            results[section.name] = {
              text: element.textContent.substring(0, 30) + '...',
              color: style.color,
              fontSize: style.fontSize,
              fontWeight: style.fontWeight
            };
          } else {
            results[section.name] = 'Element nicht gefunden';
          }
        } catch (e) {
          results[section.name] = { error: e.message };
        }
      }
      
      return results;
    });
    
    console.log('Text Readability Results:', JSON.stringify(textReadability, null, 2));
    console.log('Test completed successfully!');
    
  } catch (error) {
    console.error('Error during test:', error);
  } finally {
    await browser.close();
  }
}

testWebsite().catch(console.error); 