import{test,expect} from '@playwright/test'

test('Visual Comparision', async({page})=>{
    await page.goto('https://github.com/login');

    await expect(page).toHaveScreenshot('GitHubLoginPage1.png');
    await page.locator('#login_field').fill('playwright with typescript')
    await page.waitForTimeout(6000)
    
    await expect(page).toHaveScreenshot('GitHubLoginPage1.png');
})

test.only('Element Visual Comparision', async({page})=>{
    await page.goto('https://github.com/login');

    await expect(page).toHaveScreenshot('GitHubLoginPage1.png');

    const ele = page.locator('[class="auth-form-body mt-3"]');
    await page.waitForTimeout(6000)
    await expect(ele).toHaveScreenshot('GitHubLoginEle.png');
    await page.locator('#login_field').fill('playwright with typescript')
    await page.waitForTimeout(6000)
    
    await expect(page).toHaveScreenshot('GitHubLoginPage1.png');
})