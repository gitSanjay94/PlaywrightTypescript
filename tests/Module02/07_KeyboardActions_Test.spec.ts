import{test} from '@playwright/test'

test('Keyboard actions', async({page})=>{
  test.setTimeout(120000)
    await page.goto('https://www.google.com/')

    // Enter action from keyboard
    // await page.locator("[title='Search']").click();
    // await page.locator("[title='Search']").fill('Playwright by testers talk');
    // await page.locator("[title='Search']").press('Enter');
    await page.waitForTimeout(8000)
    
     // Selecting and deleting from keyboard
// await page.locator("[aria-label='Search']").first().click()
// await page.keyboard.press('Control+A')
// await page.waitForTimeout(8000)
// await page.keyboard.press('Delete')

// Press TAB and Enter
await page.locator("[aria-label='Search']").first().click()
await page.keyboard.press('Tab')
await page.waitForTimeout(8000)
await page.keyboard.press('Enter')
await page.waitForTimeout(8000)

})