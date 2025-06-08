// playwright-devices.js
import { chromium } from 'playwright';

// Define device presets
const devices = {
  // Phone devices
  'iPhone13': {
    width: 390,
    height: 844,
    deviceScaleFactor: 3,
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.0 Mobile/15E148 Safari/604.1',
    isMobile: true,
    hasTouch: true
  },
  'Pixel6': {
    width: 412,
    height: 915,
    deviceScaleFactor: 2.625,
    userAgent: 'Mozilla/5.0 (Linux; Android 12; Pixel 6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.41 Mobile Safari/537.36',
    isMobile: true,
    hasTouch: true
  },
  'SamsungGalaxyS21': {
    width: 360, 
    height: 800,
    deviceScaleFactor: 3,
    userAgent: 'Mozilla/5.0 (Linux; Android 12; SM-G991B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.41 Mobile Safari/537.36',
    isMobile: true,
    hasTouch: true
  },
  // Tablet devices
  'iPadPro': {
    width: 1024,
    height: 1366,
    deviceScaleFactor: 2,
    userAgent: 'Mozilla/5.0 (iPad; CPU OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.0 Mobile/15E148 Safari/604.1',
    isMobile: true,
    hasTouch: true
  },
  'GalaxyTabS7': {
    width: 753,
    height: 1193,
    deviceScaleFactor: 3,
    userAgent: 'Mozilla/5.0 (Linux; Android 12; SM-T870) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.41 Safari/537.36',
    isMobile: true,
    hasTouch: true
  }
};

// Get device from command line argument, default to Pixel6
const deviceName = process.argv[2] || 'Pixel6';
const device = devices[deviceName] || devices.Pixel6;

console.log(`Launching browser with ${deviceName} emulation...`);

(async () => {
  // Launch the browser with the headful mode
  const browser = await chromium.launch({ 
    headless: false,
    args: ['--remote-debugging-port=9222'] // This enables remote debugging
  });
  
  // Create a new context with selected device viewport
  const context = await browser.newContext({
    viewport: {
      width: device.width,
      height: device.height,
    },
    userAgent: device.userAgent,
    deviceScaleFactor: device.deviceScaleFactor,
    isMobile: device.isMobile,
    hasTouch: device.hasTouch
  });
  
  // Create a new page and navigate to the site
  const page = await context.newPage();
  await page.goto('http://localhost:5173/');
  
  console.log(`Browser launched with ${deviceName} emulation! Access your site at http://localhost:5173/`);
  console.log(`Device details:`);
  console.log(` - Screen size: ${device.width}x${device.height}`);
  console.log(` - Scale factor: ${device.deviceScaleFactor}`);
  console.log(` - Mobile: ${device.isMobile ? 'Yes' : 'No'}`);
  console.log(` - Touch: ${device.hasTouch ? 'Enabled' : 'Disabled'}`);
  console.log(`The browser will remain open until you press Ctrl+C to exit this script.`);
  
  // Keep the script running
  await new Promise(() => {});
})().catch(error => {
  console.error('Error:', error);
  process.exit(1);
});
