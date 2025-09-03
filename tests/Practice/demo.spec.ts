import { test, expect } from '@playwright/test'



test('Handle Dynamic element', async ({ page }) => {
    test.setTimeout(120000);

    page.goto('https://automationexercise.com/');

    const txtVideoTutorials = await page.getByText(' Video Tutorials');
    expect(txtVideoTutorials).toBeVisible({ timeout: 60000 });
    await txtVideoTutorials.scrollIntoViewIfNeeded();
    await txtVideoTutorials.click();




})