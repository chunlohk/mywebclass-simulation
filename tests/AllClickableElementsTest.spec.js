//Clicked around and tested all clickable elements excluding elements with links to see if website crashed
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://chunlohk.github.io/mywebclass-simulation/');
  await page.getByRole('button', { name: 'I Agree' }).click();
  await page.getByRole('combobox', { name: 'Select Language:' }).selectOption('fr');
  await page.getByRole('combobox', { name: 'Select Language:' }).selectOption('es');
  await page.getByText('Select Language: EnglishFrançaisEspañolMyWebClass.org Toggle navigationContent T').click();
  await page.getByRole('heading', { name: 'Rethink the ways of teaching!' }).click();
  await page.getByText('Stay up-to-date with the latest trends! Empower your students with cutting-edge ').click();
  await page.locator('#navbarCollapse').click();
  await page.getByRole('navigation', { name: 'Main navigation' }).click();
  await page.getByText('Monthly digest of what\'s new and exciting in the software engineering field.').click();
  await page.getByRole('heading', { name: 'Subscribe to our newsletter' }).click();
  await page.getByPlaceholder('Email address').click();
  await page.getByRole('heading', { name: 'Share on Social Media' }).click();
  await page.getByRole('heading', { name: 'About Us' }).click();
  await page.getByRole('img', { name: 'a teacher educating students on software engineering' }).click();
  await page.getByRole('heading', { name: 'Subscribe to our newsletter' }).click();
  await page.getByText('Monthly digest of what\'s new and exciting in the software engineering field.').click();
  await page.getByRole('link', { name: 'MyWebClass.org' }).click();
});