import { test, expect } from '@playwright/test'

test('Checkbox and Radio buttons', async ({ page }) => {
    await page.goto('https://jqueryui.com/checkboxradio/');
    const frame = await page.frameLocator('[class="demo-frame"]');
    await expect(frame.locator('[for="radio-2"]')).not.toBeChecked();
    await frame.locator('[for="radio-2"]').check();
    await expect(frame.locator('[for="radio-2"]')).toBeChecked();
    await page.waitForTimeout(3000);
    await expect(frame.locator('[for="checkbox-4"]')).not.toBeChecked();
    await frame.locator('[for="checkbox-4"]').check();
    await frame.locator('[for="checkbox-4"]').scrollIntoViewIfNeeded();
    await expect(frame.locator('[for="checkbox-4"]')).toBeChecked();
    await page.waitForTimeout(3000);
    await expect(frame.locator('[for="checkbox-nested-4"]')).not.toBeChecked();
    await frame.locator('[for="checkbox-nested-4"]').check();
    await frame.locator('[for="checkbox-nested-4"]').scrollIntoViewIfNeeded();
    await expect(frame.locator('[for="checkbox-nested-4"]')).toBeChecked();
    await page.waitForTimeout(3000);
})