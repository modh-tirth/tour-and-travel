import { test, expect } from '@playwright/test';

test.describe('Navigation Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display Yatra India logo', async ({ page }) => {
    await expect(page.locator('text=Yatra India').first()).toBeVisible();
  });

  test('should navigate to Home page', async ({ page }) => {
    await page.locator('a[href="/"]').first().click();
    await expect(page).toHaveURL('/');
  });

  test('should navigate to Tours page', async ({ page }) => {
    await page.locator('a[href="/tours"]').first().click();
    await expect(page).toHaveURL('/tours');
    await expect(page.locator('text=India Tour Packages')).toBeVisible();
  });

  test('should navigate to Destinations page', async ({ page }) => {
    await page.locator('a[href="/destinations"]').first().click();
    await expect(page).toHaveURL('/destinations');
    await expect(page.locator('text=Explore India')).toBeVisible();
  });

  test('should navigate to About page', async ({ page }) => {
    await page.locator('a[href="/about"]').first().click();
    await expect(page).toHaveURL('/about');
    await expect(page.locator('text=About Yatra India')).toBeVisible();
  });

  test('should navigate to Contact page', async ({ page }) => {
    await page.locator('a[href="/contact"]').first().click();
    await expect(page).toHaveURL('/contact');
    await expect(page.locator('text=Get In Touch')).toBeVisible();
  });

  test('should show Sign In button when not logged in', async ({ page }) => {
    await expect(page.locator('text=Sign In')).toBeVisible();
  });
});
