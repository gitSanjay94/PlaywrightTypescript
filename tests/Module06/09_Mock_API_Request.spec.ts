import { test, expect } from '@playwright/test'

test('Mock API request', async ({ page }) => {

    // Mock API request
    await page.route('*/**/api/v1/fruits', async route => {
        const json = [
            { name: 'Appium', id: 122 },
            { name: 'Vibium', id: 24 },
            { name: 'Selenium', id: 156 },
            { name: 'Java', id: 76 },
        ];
        await route.fulfill({ json });
    })

    // Go to URL
    await page.goto('https://demo.playwright.dev/api-mocking/')

    // Validate text
    await expect(page.getByText('Appium')).toBeVisible({timeout: 60000});
    await expect(page.getByText('Vibium')).toBeVisible({timeout: 60000});
    await expect(page.getByText('Selenium')).toBeVisible({timeout: 60000});
    await expect(page.getByText('Java')).toBeVisible({timeout: 60000});
    await page.waitForTimeout(10000)
})