import { test, expect } from '@playwright/test'

const searchKeywords = ['Playwright by Testers Talk', 'Cypress by Testers Talk', 'API Testing by Testers Talk']

for (const searchKeyword of searchKeywords) {
    test(`Parameterize tests ${searchKeyword}`, async ({ page }) => {
        test.setTimeout(120000);
        await page.goto("https://www.google.com/")

        await page.getByRole('combobox', { name: 'Search' }).fill(searchKeyword);
        await page.getByRole('combobox', { name: 'Search' }).press('Enter');

        await page.getByRole('link', { name: searchKeyword }).first().click();

        await expect(page).toHaveTitle(searchKeyword + '☑️ - YouTube');
    })
}

