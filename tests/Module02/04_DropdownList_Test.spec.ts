import { test, expect } from '@playwright/test';

test('Handling Dropdown List', async ({ page }) => {
    await page.goto('https://www.facebook.com/');
    await page.getByRole('button', { name: 'Create new account' }).click();

    // Select dropdown using value
    await page.waitForTimeout(6000)
    await page.getByLabel('Month').selectOption('7')
    await page.waitForTimeout(6000)

    // Select dropdown using visible test
    await page.getByLabel('Month').selectOption('Aug')

    // Validate all options
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    // const fetchedValues = await page.locator('#month > option').allInnerTexts();  
    // both methods capture texts frm DD
    const fetchedValues = await page.locator('#month > option').allTextContents();  
    console.log(fetchedValues)
    await expect(page.locator('#month > option')).toHaveText(months);
})