import { test, expect } from '@playwright/test'

test('Assertions', async ({ page }) => {
    test.setTimeout(120000)
    await page.goto('https://www.youtube.com/')
    await page.waitForTimeout(8000)
    expect(page.getByPlaceholder('Search', { exact: true }).first()).toBeVisible()
    expect(page.getByPlaceholder('Search')).toBeEditable()
    expect(page.getByPlaceholder('Search')).toBeEnabled()
    expect(page.getByPlaceholder('Search')).toBeEmpty() //true
    await page.getByPlaceholder('Search').fill('playwright by testers talk')
    // expect(page.getByPlaceholder('Search')).toBeEmpty() //false Received: notEmpty
    await page.waitForTimeout(8000)
    await page.keyboard.press('Enter')
    await page.waitForTimeout(8000)
    expect(page).toHaveURL('https://www.youtube.com/results?search_query=playwright+by+testers+talk');
    console.log(await page.title())
    expect(page).toHaveTitle('playwright by testers talk - YouTube')
    await page.locator("span[id='title']").last().scrollIntoViewIfNeeded()
    expect(page.locator("span[id='title']").last()).toHaveText('Shorts')
    await page.waitForTimeout(8000)
    console.log(await page.locator("span[id='title']").count())
    expect(page.locator("span[id='title']")).toHaveCount(2)
    // expect(page.locator("span[id='title']")).toBeDisabled()
})