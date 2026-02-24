import { test, expect } from '@playwright/test';

test.describe('Footer Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display company name in footer', async ({ page }) => {
    await expect(page.locator('footer').getByText('Yatra India').first()).toBeVisible();
  });

  test('should display contact information in footer', async ({ page }) => {
    await expect(page.locator('footer').getByText('+91 98765 43210')).toBeVisible();
    await expect(page.locator('footer').getByText('info@yatraindia.com')).toBeVisible();
    await expect(page.locator('footer').getByText('Mumbai, Maharashtra, India 400001')).toBeVisible();
  });

  test('should navigate to tours from footer', async ({ page }) => {
    await page.locator('footer >> a[href="/tours"]').click();
    await expect(page).toHaveURL('/tours');
  });

  test('should filter adventure tours from footer service link', async ({ page }) => {
    await page.locator('footer >> a[href="/tours?category=adventure"]').click();
    await expect(page).toHaveURL(/.*tours.*category=adventure/);
  });

  test('should filter beach tours from footer service link', async ({ page }) => {
    await page.locator('footer >> a[href="/tours?category=beach"]').click();
    await expect(page).toHaveURL(/.*tours.*category=beach/);
  });

  test('should display copyright text', async ({ page }) => {
    await expect(page.locator('text=© 2026 Yatra India Travel')).toBeVisible();
  });
});
