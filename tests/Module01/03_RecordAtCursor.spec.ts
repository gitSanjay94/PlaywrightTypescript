import { test, expect } from '@playwright/test'

test('Record at cursor test', async ({ page }) => {
    test.setTimeout(120000);
    console.log('test execution started...')
    await page.goto("https://www.google.com/")

    await page.getByRole('combobox', { name: 'Search' }).fill('playwright by testers talk');
    await page.getByRole('combobox', { name: 'Search' }).press('Enter');

    await page.getByRole('link', { name: 'Playwright by Testers Talk☑️' }).first().click();
    // await expect(page.getByRole('link', { name: 'Playwright Tutorial Full Course 2024' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Playwright API Testing Tutorial Crash Course' })).toBeVisible();
    await expect(page.getByLabel('Playwright Tutorial Full').locator('#video-title')).toContainText('Playwright Tutorial Full Course 2024 | Playwright Testing Tutorial');
    await expect(page.getByLabel('Playwright API Testing Tutorial Crash Course').locator('#video-title')).toContainText('Playwright API Testing Tutorial Crash Course 2024');
    
})