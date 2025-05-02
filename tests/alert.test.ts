import { chromium, test, expect } from "@playwright/test";

test("handling JavaScript Alerts", async ({ page }) => {
    test.setTimeout(120000);
    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo")
    page.on("dialog", async (alert) => {  //act like an event listner
        const text = await alert.message();
        console.log(text);
        await alert.accept();
    })
    await page.locator("button:has-text('Click Me')").nth(0).click();
})

test("handling Confirm box:", async ({ page }) => {
    test.setTimeout(120000);
    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo")
    page.on("dialog", async (alert) => {  //act like an event listner
        const text = await alert.message();
        console.log(text);
        await alert.dismiss();
    })
    await page.locator("button:has-text('Click Me')").nth(1).click();
    expect(page.locator('#confirm-demo')).toContainText('Cancel!')
})

test("handling Prompt box:", async ({ page }) => {
    test.setTimeout(120000);
    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo")
    page.on("dialog", async (alert) => {  //act like an event listner
        const text = await alert.message();
        console.log(text);
        await alert.accept('SK');
    })
    await page.locator("button:has-text('Click Me')").nth(2).click();
    expect(page.locator('#prompt-demo')).toContainText("'SK'")
})

test.only("handling modal alert", async ({ page }) => {
    test.setTimeout(120000);
    await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-modal-demo")
    await page.click("//button[@data-target='#myModal']")
    await page.locator("button:has-text('Save Changes')").nth(0).click();

})