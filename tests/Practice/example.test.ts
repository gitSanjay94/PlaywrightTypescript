
import{test} from '@playwright/test'

test('multiple tabs', async({page})=>{

    await page.goto('https://www.flipkart.com/')
    await page.getByPlaceholder('Search for Products, Brands and More').fill('Mobile')

    // await page.press(KeyboardEvent.En)

    let name = await page.locator("(//div[@class='col col-7-12'])[1]/div[1]");
console.log(name)

  

    

})