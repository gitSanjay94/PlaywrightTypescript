import { test, expect } from '@playwright/test'
test.beforeAll(async()=>{
    console.log(`Running before all tests...`)
})

test.beforeEach(async({page})=>{
    console.log(`Running before each tests...`)
    await page.goto("https://www.google.com/")
})

test.afterEach(async()=>{
    console.log(`Running after each tests...`)
})

test.afterAll(async()=>{
    console.log(`Running after all tests...`)
})


test('Test 1', async ({ page }) => {
    test.setTimeout(120000);
    console.log(`Test 1 execution started...`)
   

    await page.getByRole('combobox', { name: 'Search' }).fill('playwright by testers talk');
    await page.getByRole('combobox', { name: 'Search' }).press('Enter');

    await page.getByRole('link', { name: 'Playwright by Testers Talk☑️' }).first().click();
    await expect(page).toHaveTitle('Playwright by Testers Talk☑️ - YouTube');
    console.log(`Test 1 execution ended...`)
})

test('Test 2', async ({ page }) => {
    test.setTimeout(120000);
    console.log(`Test 2 execution started...`)
    // await page.goto("https://www.google.com/")

    await page.getByRole('combobox', { name: 'Search' }).fill('playwright by testers talk');
    await page.getByRole('combobox', { name: 'Search' }).press('Enter');

    await page.getByRole('link', { name: 'Playwright by Testers Talk☑️' }).first().click();
    console.log(`Test 2 execution ended...`)
})