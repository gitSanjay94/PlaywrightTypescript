import { test } from '@playwright/test'

test('Selecting date value', async ({ page }) => {
    await page.goto('https://jqueryui.com/datepicker/')

    // Selecting hardcode date
    const iframe = await page.frameLocator('.demo-frame');
    // await iframe.locator('#datepicker').fill('04/25/2025');
    // await page.waitForTimeout(9000)

    // Selecting dynamic date
    // await iframe.locator('#datepicker').click()
    // await iframe.locator('.ui-datepicker-today').click()
    // await page.waitForTimeout(9000)

    // Selecting past date
    // await iframe.locator('#datepicker').click()
    // await iframe.getByTitle("Prev").click()
    // await page.waitForTimeout(6000)
    // await iframe.locator("text='15'").click()
    // await page.waitForTimeout(6000)

    // Selecting future date
    await iframe.locator('#datepicker').click()
    await iframe.getByTitle("Next").click()
    await page.waitForTimeout(6000)
    await iframe.locator("text='29'").click()
    await page.waitForTimeout(6000)



})