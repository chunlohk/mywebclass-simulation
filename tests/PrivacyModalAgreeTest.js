import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://chunlohk.github.io/mywebclass-simulation/');
  await page.getByRole('button', { name: 'I Agree' }).click();
});