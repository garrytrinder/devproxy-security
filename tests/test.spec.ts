import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // load the page
  await page.goto('http://localhost:3000/');
  await page.waitForLoadState('domcontentloaded');

  // check if the page contains the splash screen text
  await expect(page.getByRole('paragraph')).toContainText('Product Support Tickets');

  // check that the login button is visible
  const button = page.getByRole('button', { name: 'Login' });
  await expect(button).toBeVisible();

  // set the popup promise
  const popupPromise = page.waitForEvent('popup');

  // click the login button
  await button.click();

  // handle the auth popup
  const popup = await popupPromise;

  // after the popup is closed, check if the page contains the last ticket returned in the table
  await expect(page.locator('tbody')).toContainText('Eagle Air Range Limitation Inquiry');
});