import { test } from '@playwright/test'



test('Test 1', async ({ page }) => {
    await page.goto('https://jqueryui.com/droppable/');

    const iframe = page.frameLocator('.demo-frame');
    // drag and drop
    const dragEle = await iframe.locator('#draggable');
    const dropEle = await iframe.locator('#droppable');

    await dragEle.dragTo(dropEle)
    await page.waitForTimeout(6000)

})

test.skip('Test 2', async ({ page }) => {
    await page.goto('https://jqueryui.com/droppable/');

    const iframe = page.frameLocator('.demo-frame');
    // drag and drop
    const dragEle = await iframe.locator('#draggable');
    const dropEle = await iframe.locator('#droppable');

    await dragEle.dragTo(dropEle)
    await page.waitForTimeout(6000)

})

test.only('Test 3', async ({ page }) => {
    await page.goto('https://jqueryui.com/droppable/');
    console.log(`Only...`)

    const iframe = page.frameLocator('.demo-frame');
    // drag and drop
    const dragEle = await iframe.locator('#draggable');
    const dropEle = await iframe.locator('#droppable');

    await dragEle.dragTo(dropEle)
    await page.waitForTimeout(6000)

})