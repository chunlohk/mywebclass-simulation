// @ts-check
const { test, expect } = require('@playwright/test');

test('User Rights', async ({ page }) => {
  await page.goto('https://chunlohk.github.io/mywebclass-simulation/');

  // Click the get started link.
  await page.getByRole('link', { name: 'User Rights' }).click();

});