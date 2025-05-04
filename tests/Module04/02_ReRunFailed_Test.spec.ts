import{test,expect} from '@playwright/test'

test('Test 1', async({page, browser})=>{
    test.setTimeout(120000);
    await page.goto('https://jqueryui.com/droppable/');

    let iframe=page.frameLocator('.demo-frame');
    // drag and drop
   let dragEle= await iframe.locator('#draggable');
   let dropEle= await iframe.locator('#droppable');

   await dragEle.dragTo(dropEle);
   await page.waitForTimeout(6000);
})

test('Test 2', async({page, browser})=>{
    expect(true).toBe(false);
})
test('Test 3', async({page, browser})=>{
    expect(true).toBe(false);
})

//npx playwright test --last-failed