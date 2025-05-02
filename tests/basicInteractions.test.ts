import { expect, test } from "@playwright/test"

test('Interaction with inputs', async ({ page }) => {
    test.setTimeout(120000);
    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo");
    const msgInput = page.locator("input#user-message");
    await msgInput.scrollIntoViewIfNeeded();
    console.log(await msgInput.getAttribute("placeholder"));
    expect(msgInput).toHaveAttribute("placeholder", "Please enter your Message");
    console.log('Before entering data:', await msgInput.inputValue());

    await msgInput.fill('Hi SKD');
    console.log('Before entering data:', await msgInput.inputValue());
});

test('Sum', async ({ page }) => {
    test.setTimeout(120000);
    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo");
    let sum1Input = page.locator('#sum1');
    let sum2Input = page.locator('#sum2');

    let getSumBtn = page.getByText('Get Sum')
    await sum1Input.fill('' + 123)  //convert string    fill= clear and pass fresh data
    let num1 = await sum1Input.inputValue()
    await sum2Input.type('345')  //type = append
    let num2 = await sum2Input.inputValue();
    await getSumBtn.click();
    const result = page.locator('#addmessage')
    console.log(await result.textContent())
    let expectedRes: number = parseInt(num1) + parseInt(num2);
    expect(result).toHaveText('' + expectedRes)
});

test.only('Checkbox', async ({ page }) => {
    test.setTimeout(120000);
    await page.goto("https://www.lambdatest.com/selenium-playground/checkbox-demo");
    const singleCB = await page.locator('#isAgeSelected');
    expect(singleCB).not.toBeChecked();
    await singleCB.check();
    expect(singleCB).toBeChecked();
});