import{test,expect} from '@playwright/test'

test('Mouse Actions', async({page})=>{
    await page.goto('https://www.google.com/search?q=playwright+by+testers+talk')

    // Left button click
    // await page.getByRole('link',{name:'Playwright by Testers Talk☑️'}).first().click({button:'left'});
    await page.waitForTimeout(8000)

    // Middle button click
    // await page.getByRole('link',{name:'Playwright by Testers Talk☑️'}).first().click({button:'middle'});
    // await page.waitForTimeout(8000)

    // Right button click
    // await page.getByRole('link',{name:'Playwright by Testers Talk☑️'}).first().click({button:'right'});
    // await page.waitForTimeout(8000)

    // Mouse hover
    await page.getByLabel('Search by voice').hover();
    await page.waitForTimeout(8000)

    // Double click
    await page.getByLabel('Search by voice').dblclick();
    await page.waitForTimeout(8000)

})