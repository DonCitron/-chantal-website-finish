// playwright-android.js
import { chromium } from 'playwright';

(async () => {
  // Launch the browser with the headful mode
  const browser = await chromium.launch({ 
    headless: false, 
    args: ['--remote-debugging-port=9222'] // This enables remote debugging
  });
  
  // Create a new context with Android device viewport
  const context = await browser.newContext({
    viewport: {
      width: 412,  // Pixel 6 width
      height: 915, // Pixel 6 height
    },
    userAgent: 'Mozilla/5.0 (Linux; Android 12; Pixel 6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.41 Mobile Safari/537.36',
    deviceScaleFactor: 2.625,
    isMobile: true,
    hasTouch: true
  });
  
  // Create a new page and navigate to the site
  const page = await context.newPage();
  await page.goto('http://localhost:5173/');
  
  console.log('Browser launched! Access your site with Android emulation.');
  console.log('The browser will remain open until you press Ctrl+C to exit this script.');
  
  // Keep the script running
  await new Promise(() => {});
})().catch(error => {
  console.error('Error:', error);
  process.exit(1);
});
