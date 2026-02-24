import { test, expect } from '@playwright/test';

test.describe('Home Page Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display Hindi welcome message', async ({ page }) => {
    await expect(page.locator('text=सु स्वागतम')).toBeVisible();
  });

  test('should display main heading', async ({ page }) => {
    await expect(page.locator('text=Discover Incredible India')).toBeVisible();
  });

  test('should show autocomplete suggestions when typing', async ({ page }) => {
    const searchInput = page.locator('input[placeholder="Where to?"]');
    await searchInput.fill('taj');
    await expect(page.locator('text=Taj Mahal, Agra')).toBeVisible();
  });

  test('should select destination from autocomplete', async ({ page }) => {
    const searchInput = page.locator('input[placeholder="Where to?"]');
    await searchInput.fill('taj');
    await page.locator('text=Taj Mahal, Agra').click();
    await expect(searchInput).toHaveValue('Taj Mahal, Agra');
  });

  test('should allow date selection', async ({ page }) => {
    const dateInput = page.locator('input[type="date"]');
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const dateString = tomorrow.toISOString().split('T')[0];
    await dateInput.fill(dateString);
    await expect(dateInput).toHaveValue(dateString);
  });

  test('should display all 4 feature cards', async ({ page }) => {
    await expect(page.locator('text=100+ Destinations')).toBeVisible();
    await expect(page.locator('text=Best Price Guarantee')).toBeVisible();
    await expect(page.locator('text=Safe & Secure')).toBeVisible();
    await expect(page.locator('text=24/7 Support')).toBeVisible();
  });

  test('should display all 4 destination cards', async ({ page }) => {
    await expect(page.locator('text=Taj Mahal Tour')).toBeVisible();
    await expect(page.locator('text=Kerala Backwaters')).toBeVisible();
    await expect(page.locator('text=Rajasthan Heritage')).toBeVisible();
    await expect(page.locator('text=Goa Beach Paradise')).toBeVisible();
  });

  test('should show prices in Indian Rupees', async ({ page }) => {
    await expect(page.locator('text=₹12,999').first()).toBeVisible();
  });

  test('should navigate to booking page when clicking Book Now', async ({ page }) => {
    await page.locator('text=Book Now').first().click();
    await expect(page).toHaveURL(/.*booking/);
  });

  test('should navigate to destinations page', async ({ page }) => {
    await page.locator('text=View All Destinations').click();
    await expect(page).toHaveURL(/.*destinations/);
  });
});
