import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://chunlohk.github.io/mywebclass-simulation/');

  //Locate Privacy Modal Layer
  await page.locator('#privacyModal').click();
  //Locate Privacy Modal Layer Content
  //await page.locator('div').filter({ hasText: 'Your Privacy Matters' }).click();
  await page.locator('div').filter({ hasText: 'At MyWebClass.org, we are committed to protecting your privacy and providing you' }).nth(3).click();

  //Check Privacy Policy Intro Content
  await page.getByText('At MyWebClass.org, we are committed to protecting your privacy and providing you').click();
  await page.getByText('By clicking "I Agree," you consent to the collection, use, and storage of your p').click();
  await page.getByText('If you do not wish to provide your consent, please click "I Disagree." However, ').click();
  await page.getByRole('paragraph').filter({ hasText: 'For more information about how we handle your personal data, please review our P' }).getByRole('link', { name: 'Privacy Policy' }).click();

  //Check Redirect Links
  await page.locator('#privacyModal').click();
  await page.locator('#privacyModal').getByRole('link', { name: 'Contact Us' }).click();
  await page.getByRole('link', { name: '[Developer Email]' }).click();

  //Check "I Disagree" Function
  await page.getByRole('button', { name: 'I Disagree' }).click();
  await page.goto('https://chunlohk.github.io/mywebclass-simulation/contact.html');

  //Check "I Agree" Function
  await page.getByRole('button', { name: 'I Agree' }).click();

  //Confirm The State of Website Layer after "I Agree" is clicked
  await page.getByText('MyWebClass.org Toggle navigationContact UsName:Email:Phone:Express your needs:Su').click();
});