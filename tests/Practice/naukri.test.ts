import { test, expect } from '@playwright/test'

test('Update Naukri profile', async ({ page }) => {
    test.setTimeout(120000);
    await page.goto('https://www.naukri.com/');
    console.log(`The title is: `, await page.title());
    expect(page.getByText('Find your dream job now')).toBeVisible({ timeout: 60000 });
    await page.locator("#login_Layer").click();
    await page.getByPlaceholder('Enter your active Email ID / Username').fill('5s.skdkumardas@gmail.com');
    await page.getByPlaceholder('Enter your password').fill('Skd@1994');
    await page.getByRole('button', { name: 'Login', exact: true }).click();
    await page.waitForTimeout(6000)
    console.log(`The title after login is: `, await page.title());
})