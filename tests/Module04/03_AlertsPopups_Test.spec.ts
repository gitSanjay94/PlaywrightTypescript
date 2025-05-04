import { test } from '@playwright/test'

test('handling Alert popup', async ({ page }) => {
    await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/');

    page.once("dialog", dialog => {
        dialog.accept();
        console.log(`Alert message is : ${dialog.message()}`)
        console.log(`Dialog type is : ${dialog.type()}`)
    })

    await page.getByText('See an example alert', { exact: true }).click();
    await page.waitForTimeout(6000);

})

test('handling Confirm popups', async ({ page }) => {
    await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/');

    page.once("dialog", dialog => {
        // dialog.accept();
        dialog.dismiss();
        console.log(`Alert message is : ${dialog.message()}`)
        console.log(`Dialog type is : ${dialog.type()}`)
    })

    await page.getByText('See a sample confirm', { exact: true }).click();
    await page.waitForTimeout(6000);

})

test('handling Prompt popups', async ({ page }) => {
    await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/');

    page.once("dialog", async (dialog) => {

        console.log(`Alert message is : ${dialog.message()}`)
        console.log(`Dialog type is : ${dialog.type()}`)
        await page.waitForTimeout(6000);
        await dialog.accept('playwright');
        await page.waitForTimeout(6000);

    })

    await page.getByText('See a sample prompt', { exact: true }).click();
    await page.waitForTimeout(6000);

})