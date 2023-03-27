import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://chunlohk.github.io/mywebclass-simulation/');
  await page.getByRole('button', { name: 'I Agree' }).click();
  await page.locator('#navbarCollapse').click();
  await page.getByRole('link', { name: 'Content Template' }).click();
  await page.getByRole('heading', { name: 'User Rights' }).click();
  await page.getByRole('link', { name: 'Data Security P...' }).click();
  await page.getByRole('heading', { name: 'Data Security Policy for MyWebClass.org' }).click();
  await page.getByRole('heading', { name: '1. Access Control' }).click();
  await page.getByRole('heading', { name: '2. Data Encryption' }).click();
  await page.getByRole('heading', { name: '3. Password Policies' }).click();
  await page.getByRole('heading', { name: '4. Security Monitoring' }).click();
  await page.getByRole('heading', { name: '5. Incident Management' }).click();
  await page.getByRole('heading', { name: '6. Employee Training' }).click();
  await page.getByRole('heading', { name: '7. Third-Party Providers' }).click();
  await page.getByRole('heading', { name: '8. Policy Review and Updates' }).click();
  await page.getByRole('heading', { name: 'Cookie Consent' }).click();
  await page.getByRole('contentinfo').click();
  //await page.locator('div').filter({ hasText: 'Share on Social Media' }).click();
  //await page.getByRole('link', { name: '' }).click();
  await page.getByRole('heading', { name: 'Subscribe to our newsletter' }).click();
  await page.getByText('Monthly digest of what\'s new and exciting from us.').click();
  await page.getByPlaceholder('Email address').click();
  await page.getByRole('button', { name: 'Subscribe' }).click();

});