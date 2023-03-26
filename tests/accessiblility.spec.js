import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  //Accept Privacy Policy

  await page.goto('https://chunlohk.github.io/mywebclass-simulation/');
  await page.getByRole('button', { name: 'I Agree' }).click();

  //Ability to Select different languages: English, French, Spanish

  await page.getByText('Select Language:').click();
  await page.getByRole('combobox', { name: 'Select Language:' }).selectOption('fr');
  await page.getByRole('combobox', { name: 'Select Language:' }).selectOption('es');
  await page.getByRole('combobox', { name: 'Select Language:' }).selectOption('en');

  //Display Contact Us properly to have end-users to contact developer for accessibility issues or offer ideas to improve the website
  await page.getByRole('link', { name: 'Contact Us' }).click();
  await page.getByRole('heading', { name: 'Contact Us' }).click();
});