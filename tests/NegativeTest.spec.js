// check email address on both homepage and content page with invalid input to see if page crashes
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://chunlohk.github.io/mywebclass-simulation/');
  await page.getByRole('button', { name: 'I Agree' }).click();
  await page.getByPlaceholder('Email address').click();
  await page.getByPlaceholder('Email address').fill('123456');
  await page.getByRole('button', { name: 'Subscribe' }).click();
  await page.getByRole('link', { name: 'Content Template' }).click();
  await page.getByPlaceholder('Email address').click();
  await page.getByPlaceholder('Email address').fill('1235356');
  await page.getByRole('button', { name: 'Subscribe' }).click();

});