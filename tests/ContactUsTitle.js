import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://chunlohk.github.io/mywebclass-simulation/contact.html');
  await page.getByRole('button', { name: 'I Agree' }).click();
  await page.getByRole('heading', { name: 'Contact Us' }).click();
  await page.getByText('Just fill out the contact form below, and one of our friendly team members will ').click();

});