import { test, expect } from '@playwright/test'

test('Handling Iframes, Drag and Drop element', async ({ page }) => {
    await page.goto('https://jqueryui.com/droppable/');

    const iframe = page.frameLocator('.demo-frame');
    // drag and drop
    const dragEle = await iframe.locator('#draggable');
    const dropEle = await iframe.locator('#droppable');

    await dragEle.dragTo(dropEle)
    await page.waitForTimeout(6000)

})

test.only('SDET frames', async ({ page }) => {
    test.setTimeout(120000);
    await page.setViewportSize({width:640,height:480})
    await page.goto('https://ui.vision/demo/webtest/frames/');

    //total frames
    const allframes = await page.frames();
    console.log(allframes.length);  //7

    //approach 1: using name or url of the page
    //    const frame = await page.frame('name');  if name is present
    const frame1 = await page.frame({ url: 'https://ui.vision/demo/webtest/frames/frame_1.html' });
    await frame1?.locator("//input[@name='mytext1']").fill('Hello');
    await page.waitForTimeout(5000)

    //approach 2: using framelocator
    await page.frameLocator("//frame[@src='frame_1.html']").locator("//input[@name='mytext1']").fill('Bye');
    await page.waitForTimeout(5000)
})