import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  const popupPromise  = page.waitForEvent('popup');
  await page.getByRole('button', { name: 'Login' }).click();
  const popup = await popupPromise;
  await expect(page.locator('tbody')).toContainText('Eagle Air Range Limitation Inquiry');
});