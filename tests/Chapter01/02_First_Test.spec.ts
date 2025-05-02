import { test, expect } from '@playwright/test'

test('My First Playwright TypeScript Test', async ({ page }) => {
    test.setTimeout(120000);
    await page.goto("https://www.google.com/")

    await page.getByRole('combobox', { name: 'Search' }).fill('playwright by testers talk');
    await page.getByRole('combobox', { name: 'Search' }).press('Enter');

    await page.getByRole('link', { name: 'Playwright by Testers Talk☑️' }).first().click();
    // await page.waitForTimeout(60000)
    // console.log('#############',await page.title())
    // await expect(page).toHaveTitle('Playwright by Testers Talk☑️ - YouTube');
})