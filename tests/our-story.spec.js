const { test, expect } = require('@playwright/test');

test('Verify "Our Story" link redirects to the correct page', async ({ page }) => {
  // Navigate to the website
  await page.goto('https://chunlohk.github.io/mywebclass-simulation/');

  // Find and click the "Our Story" link
  await page.click('a[href="story.html"]');

  // Wait for the page to load
  await page.waitForSelector('.story');

  // Verify that the page title is correct
  const pageTitle = await page.title();
  expect(pageTitle).toBe('MyWebClass.org | Our Story');

  // Verify that the page content is correct
  const pageContent = await page.textContent('.story');
  expect(pageContent).toContain('Our Story');
  expect(pageContent).toContain('Lorem ipsum dolor sit amet');
});

