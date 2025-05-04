import{test,expect} from '@playwright/test'

test('Handling Iframes, Drag and Drop element', async({page})=>{
    await page.goto('https://jqueryui.com/droppable/');

    const iframe=page.frameLocator('.demo-frame');
    // drag and drop
   const dragEle= await iframe.locator('#draggable');
   const dropEle= await iframe.locator('#droppable');

   await dragEle.dragTo(dropEle)
   await page.waitForTimeout(6000)

})