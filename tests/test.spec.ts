import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
await page.goto('http://localhost:3000/');
const page1Promise = page.waitForEvent('popup');
  await page.getByRole('button', { name: 'Login' }).click();
  await page1Promise;
  await expect(page.locator('tbody')).toContainText('Eagle Air Range Limitation Inquiry');
});