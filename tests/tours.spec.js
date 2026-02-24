import { test, expect } from '@playwright/test';

test.describe('Tours Page Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/tours');
  });

  test('should display tours page heading', async ({ page }) => {
    await expect(page.locator('text=India Tour Packages')).toBeVisible();
  });

  test('should display category filters', async ({ page }) => {
    await expect(page.getByRole('button', { name: 'All Tours' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Adventure' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Beach' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Cultural' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Luxury' })).toBeVisible();
  });

  test('should filter adventure tours', async ({ page }) => {
    await page.getByRole('button', { name: 'Adventure' }).click();
    await expect(page.getByText('Himalayan Adventure')).toBeVisible();
    await expect(page.getByText('Ladakh Bike Expedition')).toBeVisible();
  });

  test('should filter beach tours', async ({ page }) => {
    await page.getByRole('button', { name: 'Beach' }).click();
    await expect(page.getByText('Kerala Backwaters Cruise')).toBeVisible();
    await expect(page.getByText('Goa Beach Holiday')).toBeVisible();
  });

  test('should filter cultural tours', async ({ page }) => {
    await page.getByRole('button', { name: 'Cultural' }).click();
    await expect(page.getByText('Golden Triangle Tour')).toBeVisible();
    await expect(page.getByText('Rajasthan Royal Heritage')).toBeVisible();
  });

  test('should display tour prices in rupees', async ({ page }) => {
    await expect(page.locator('text=₹').first()).toBeVisible();
  });

  test('should display tour highlights', async ({ page }) => {
    await expect(page.locator('text=Taj Mahal')).toBeVisible();
  });

  test('should navigate to booking from tour card', async ({ page }) => {
    await page.locator('text=Book Now').first().click();
    await expect(page).toHaveURL(/.*booking/);
  });
});
