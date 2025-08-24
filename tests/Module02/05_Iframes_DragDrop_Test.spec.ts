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

test('SDET frames', async ({ page }) => {
    test.setTimeout(120000);
    await page.setViewportSize({ width: 640, height: 480 })
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

test('Inner frames', async ({ page }) => {
    test.setTimeout(120000);

    await page.goto('https://ui.vision/demo/webtest/frames/');
    const frame3 = await page.frame({ url: 'https://ui.vision/demo/webtest/frames/frame_3.html' })
    // await frame3?.locator("//input[@name='mytext3']").fill('Frame3')

    //nested frame
    const childFrames = await frame3?.childFrames();
    // await childFrames[0].locator("[id='i6']").check()
    await page.waitForTimeout(5000)


})

test.only('frames letcode', async ({ page }) => {
    test.setTimeout(120000);
    await page.goto('https://letcode.in/frame')
    const frame = page.frame({ name: "firstFr" })
    if (frame != null) {
        await frame.fill('input[name="fname"]', 'S')
        await frame.fill('input[name="lname"]', 'K')

        //inner frame
        const frames = frame.childFrames();
        console.log(frames.length)
        await frames[0].fill('input[name="email"]', 'test@gmail')
        const parent = await frames[0].parentFrame();
        await parent?.fill('input[name="lname"]', 'D')
        await page.waitForTimeout(5000)
    } else throw new Error('No such frame')
})