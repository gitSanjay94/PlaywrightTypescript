
import { expect, test } from "@playwright/test"
import moment from "moment"

test('Calendar demo using fill function', async ({ page }) => {
    test.setTimeout(120000);
    await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo");
    let date = "1994/30/03";
    await page.getByRole('textbox', { name: 'Birthday:' }).fill('2025-03-20');
    await page.waitForTimeout(6000);
})

test('Calendar demo using moment', async ({ page }) => {
    test.setTimeout(120000);
    await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo");
    
    await selectDate(12, "December 2024");
    await page.reload();
    await selectDate(23, "July 2025")
    await page.reload();
    await selectDate(25, "March 2025")




async function selectDate(date:number, monthYear:string) {
    await page.click("//input[@placeholder='Start date']")

    const mmYY = page.locator("(//table[@class='table-condensed']//th[@class='datepicker-switch'])[1]");
    const prev = page.locator("(//table[@class='table-condensed']//th[@class='prev'])[1]");
    const next = page.locator("(//table[@class='table-condensed']//th[@class='next'])[1]");

    // let monthYear: string = "July 2024";

    const thisMonth = moment(monthYear, "MMMM YYYY").isBefore();
    console.log('this month ', thisMonth); //this month  true

    while (await mmYY.textContent() != monthYear) {
        if (thisMonth) {
            await prev.click();
        } else {
            await next.click();
        }
    }


    await page.click(`//td[@class='day'][text()='${date}']`);
    await page.waitForTimeout(6000);
}
})
