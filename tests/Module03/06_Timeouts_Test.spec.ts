import { test, expect } from '@playwright/test'

test('Test Timeouts', async ({ page }) => {
    //local test timeout
    test.setTimeout(1 * 60 * 1000);
    //Test timeout of 60000ms exceeded.  error

    await page.goto("https://www.google.com/")

    await page.getByRole('combobox', { name: 'Search' }).fill('playwright by testers talk');
    await page.getByRole('combobox', { name: 'Search' }).press('Enter');

    await page.getByRole('link', { name: 'Playwright by Testers Talk☑️' }).first().click();
    await page.waitForTimeout(70000)

    await expect(page).toHaveTitle('Playwright by Testers Talk☑️ - YouTube');
    await page.waitForTimeout(70000)

    //Global test timeout...in playwright.config.ts     timeout: 2 * 60 *1000,
    //Test timeout of 120000ms exceeded.   error
})

test('Assertion Timeouts', async ({ page }) => {

    await page.goto("https://www.google.com/")

    await page.getByRole('combobox', { name: 'Search' }).fill('playwright by testers talk');
    await page.getByRole('combobox', { name: 'Search' }).press('Enter');

    await page.getByRole('link', { name: 'Playwright by Testers Talk☑️' }).first().click();

    //local assertion timeout
    await expect(page).toHaveTitle('Playwright typescript by Testers Talk☑️ - YouTube', { timeout: 5000 });
    //Error: Timed out 5000ms waiting for expect(locator).toHaveTitle(expected)


    //Global assertion timeout
    // await expect(page).toHaveTitle('Playwright typescript by Testers Talk☑️ - YouTube');

    //Global assertion timeout...in playwright.config.ts  
    // expect: {
    //     timeout:10000
    //   }

    // Error: Timed out 10000ms waiting for expect(locator).toHaveTitle(expected)
})

test('Action Timeouts', async ({ page }) => {

    await page.goto("https://www.google.com/")

    await page.getByRole('combobox', { name: 'Search' }).fill('playwright by testers talk');
    await page.getByRole('combobox', { name: 'Search' }).press('Enter');

    //Global action timeout ...in playwright.config.ts    
    //actionTimeout: 10000,
    // await page.getByRole('link', { name: 'Playwright typescript by Testers Talk☑️' }).first().click();
    //TimeoutError: locator.click: Timeout 10000ms exceeded.

    //Local action timeout
    await page.getByRole('link', { name: 'Playwright typescript by Testers Talk☑️' }).first().click({ timeout: 5000 });
    //TimeoutError: locator.click: Timeout 5000ms exceeded.

    await expect(page).toHaveTitle('Playwright by Testers Talk☑️ - YouTube');

})

// All Test Execution Timeout...in playwright.config.ts  when all tests run before 1 hr
//   globalTimeout: 60 * 60 * 1000,