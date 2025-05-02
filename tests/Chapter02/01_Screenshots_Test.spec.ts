import { test, expect } from '@playwright/test'

test('Capture screenshots in playwright', async ({ page }) => {
    test.setTimeout(120000);
    await page.goto('https://www.youtube.com/@testerstalk');

    //Element screenshot
    expect(page.locator("#page-header-container")).toBeVisible({ timeout: 60000 });
    await page.locator("#page-header-container").screenshot({ path: './screenshots/ElementScreenshot.png' });

    //Page screenshot
    await page.screenshot({ path: './screenshots/PageScreenshot.png' });

    //Full Page screenshot
    await page.screenshot({ path: './screenshots/FullPageScreenshot.png', fullPage: true })
})