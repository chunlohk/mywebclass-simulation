const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.route('**/*', route => {
    const request = route.request();
    console.log(`Request ${request.method()} ${request.url()}`);
    route.continue();
  });

  await page.goto('https://chunlohk.github.io/mywebclass-simulation/');
  const performanceMetrics = JSON.parse(await page.evaluate(() => JSON.stringify(window.performance.toJSON())));

  console.log(performanceMetrics);

  await browser.close();
})();