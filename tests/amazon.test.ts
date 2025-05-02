import { test, expect } from "@playwright/test";

test("amazon", async ({ page }) => {
    test.setTimeout(120000);
    await page.goto("https://www.amazon.in/")
    const listItems = page.locator("//ul[@class='nav-ul']/li");

    const count = await listItems.count();

    for (let i = 0; i < count; i++) {
        const text = await listItems.nth(i).innerText();
        console.log(`${i + 1} ${text}`);
    }
    let title = await page.title();
    console.log(title)
    await page.locator('#searchDropdownBox').selectOption('Baby')
    await page.locator('input#twotabsearchtextbox').fill('diapers')
    await page.waitForTimeout(6000)

    await page.locator('div#sac-suggestion-row-3').hover()
    await page.locator('div#sac-suggestion-row-3').click()
    await page.waitForTimeout(6000)
    title = await page.title();
    console.log(title)
    await expect(page.locator("//h2[text()='Results']")).toBeVisible();
    await page.waitForTimeout(6000)
    await page.getByRole('button', { name: 'Add to cart' }).nth(1).click()
    await page.waitForTimeout(6000)
    await page.locator("//a[contains(text(), 'Go to Cart')]").click()
    title = await page.title();
    console.log(title)
    let text = await page.locator('h2#sc-active-items-header').innerText()
    expect(text).toEqual('Shopping Cart')
    await page.locator("//input[@name='proceedToRetailCheckout']").click();
    let text1 = await page.locator("//h1[normalize-space()= 'Sign in or create account']").textContent()
    expect(text1).toContain('Sign in or create account')
    let text2 = await page.locator("//p[normalize-space()= 'Enter mobile number or email']").innerText()
    expect(text2).toEqual('Enter mobile number or email')
    await page.waitForTimeout(6000)
})