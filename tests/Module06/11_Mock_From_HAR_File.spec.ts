import { test, expect } from '@playwright/test'

test('Mock API from HAR file', async ({ page }) => {
    await page.routeFromHAR('./har/fruits.har', {
        url: '*/**/api/v1/fruits',
        update: false
    })

    // Go to URL
    await page.goto('https://demo.playwright.dev/api-mocking/');
    await page.waitForTimeout(10000);
    
    // Validate text
    expect(page.getByText('Strawberry')).toBeVisible({ timeout: 60000 });
    expect(page.getByText('Selenium')).toBeVisible({ timeout: 60000 });
    expect(page.getByText('Typescript')).toBeVisible({ timeout: 60000 });
    expect(page.getByText('Appium')).toBeVisible({ timeout: 60000 });
    expect(page.getByText('Rest API')).toBeVisible({ timeout: 60000 });
    await page.waitForTimeout(10000);


})