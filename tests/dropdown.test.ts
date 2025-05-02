import { chromium, test, expect } from "@playwright/test";

test("handling Select dropdown", async({page})=>{
     test.setTimeout(120000); 
    await page.goto("https://www.lambdatest.com/selenium-playground/select-dropdown-demo")
    await page.selectOption('#select-demo',{label: 'Tuesday'})
    await page.waitForTimeout(3000)
    await page.selectOption('#select-demo',{value: 'Friday'})
    await page.waitForTimeout(3000)
    await page.selectOption('#select-demo',{index: 5}) //Thursday
    await page.waitForTimeout(3000)
})

test('handling Multi Select Option', async({page})=>{
    test.setTimeout(120000); 
    await page.goto("https://www.lambdatest.com/selenium-playground/select-dropdown-demo") 
    await page.selectOption('#multi-select', [{label:"Texas"}, {index:2}, {value:"Washington"}])
    await page.waitForTimeout(3000)
})

test('Bootstrap dropdown', async({page})=>{
    test.setTimeout(120000); 
    await page.goto('https://www.lambdatest.com/selenium-playground/jquery-dropdown-search-demo')
    await selectCountry('India');
    await selectCountry('Denmark');
    await selectCountry('South Africa');

    async function selectCountry(countryName) {
        await page.click('#country+span');
        await page.locator('ul#select2-country-results').locator('li', { hasText: countryName }).click();
        await page.waitForTimeout(3000);
    }
})