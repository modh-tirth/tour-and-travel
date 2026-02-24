import { test, expect } from '@playwright/test';

test.describe('Contact Page Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/contact');
  });

  test('should display contact page heading', async ({ page }) => {
    await expect(page.locator('text=Get In Touch')).toBeVisible();
  });

  test('should display contact information', async ({ page }) => {
    await expect(page.getByText('+91 98765 43210').first()).toBeVisible();
    await expect(page.getByText('info@yatraindia.com').first()).toBeVisible();
    await expect(page.getByText('Mumbai, Maharashtra 400001', { exact: false })).toBeVisible();
  });

  test('should display contact form', async ({ page }) => {
    await expect(page.locator('input[name="name"]')).toBeVisible();
    await expect(page.locator('input[name="email"]')).toBeVisible();
    await expect(page.locator('input[name="phone"]')).toBeVisible();
    await expect(page.locator('select[name="destination"]')).toBeVisible();
    await expect(page.locator('textarea[name="message"]')).toBeVisible();
  });

  test('should have Indian destinations in dropdown', async ({ page }) => {
    const select = page.locator('select[name="destination"]');
    await expect(select.locator('option[value="taj-mahal"]')).toHaveText('Taj Mahal, Agra');
    await expect(select.locator('option[value="kerala"]')).toHaveText('Kerala Backwaters');
    await expect(select.locator('option[value="goa"]')).toHaveText('Goa');
  });

  test('should submit contact form', async ({ page }) => {
    await page.locator('input[name="name"]').fill('Test User');
    await page.locator('input[name="email"]').fill('test@example.com');
    await page.locator('textarea[name="message"]').fill('Test message');
    await page.locator('button:has-text("Send Message")').click();
    await expect(page.locator('text=Thank you for your message')).toBeVisible();
  });

  test('should display Google Maps', async ({ page }) => {
    await expect(page.locator('iframe[title="Mumbai Location"]')).toBeVisible();
  });
});
