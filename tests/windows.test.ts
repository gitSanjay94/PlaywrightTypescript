import { chromium, test, expect } from "@playwright/test";

test('window handle', async({page})=>{
    test.setTimeout(120000);
    await page.goto('https://www.lambdatest.com/selenium-playground/window-popup-modal-demo')
     
    console.log(page.url())
    const [newWindow] = await Promise.all([
        page.waitForEvent("popup"),
        page.click("'Follow On Twitter'")
    ]);
    console.log(newWindow.url())
})

test('multiple window handle', async ({page})=>{
    test.setTimeout(120000)
    await page.goto('https://www.lambdatest.com/selenium-playground/window-popup-modal-demo')
    // console.log(page.url())
    const [multiPage] = await Promise.all([
        page.waitForEvent('popup'),
        page.click("'Follow Twitter & Facebook'")
    ])
    await multiPage.waitForLoadState()
    const pages = multiPage.context().pages()
    console.log(pages.length)

    
    pages.forEach(tab=>{
        console.log(tab.url())
    })

    let facebookPage: Page;
    for (let index = 0; index < pages.length; index++) {
      const url = pages[index].url();
      if(url.includes('facebook')){
        facebookPage = pages[index];
      }
        
    }
    const text = await facebookPage.textContent('//h1')
    console.log(text)
})