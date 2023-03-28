//Check invalid input on Contact Us page to see if page crashes
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://chunlohk.github.io/mywebclass-simulation/contact.html');
  await page.getByRole('button', { name: 'I Agree' }).click();
  await page.getByLabel('Name:').click();
  await page.getByLabel('Name:').fill('dfwef2342$@$#@');
  await page.getByLabel('Email:').click();
  await page.getByLabel('Email:').fill('@$$@$fsdfwe43');
  await page.getByPlaceholder('123-456-7890').click();
  await page.getByPlaceholder('123-456-7890').fill('2342fsees@$$');
  await page.getByLabel('Express your needs:').click();
  await page.getByLabel('Express your needs:').fill('@$@#');
  await page.getByPlaceholder('123-456-7890').click();
  await page.getByPlaceholder('123-456-7890').fill('2342fsees@$');
  await page.getByLabel('Express your needs:').click();
  await page.getByLabel('Express your needs:').fill('@$@#fsdfs3243');
  await page.getByRole('button', { name: 'Submit' }).click();
});

