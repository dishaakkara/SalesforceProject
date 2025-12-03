import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch({ headless: false, slowMo: 50 });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://login.salesforce.com');

  console.log("🚀 Browser opened. Please log in manually and complete MFA.");
  await page.pause(); // this will open the inspector and wait

  // Save session after manual login
  await context.storageState({ path: 'storageState.json' });
  console.log("✅ Storage state saved to storageState.json");

  await browser.close();
})();
