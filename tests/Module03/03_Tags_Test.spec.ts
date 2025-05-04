import { test } from '@playwright/test'



test('Test 1',{tag:['@smoke']}, async ({ page }) => {
    await page.goto('https://jqueryui.com/droppable/');
    console.log(`Test 1...`)
    const iframe = page.frameLocator('.demo-frame');
    // drag and drop
    const dragEle = await iframe.locator('#draggable');
    const dropEle = await iframe.locator('#droppable');

    await dragEle.dragTo(dropEle)
    await page.waitForTimeout(6000)

})

test('Test 2',{tag:['@smoke','@regression']}, async ({ page }) => {
    await page.goto('https://jqueryui.com/droppable/');
    console.log(`Test 2...`)
    const iframe = page.frameLocator('.demo-frame');
    // drag and drop
    const dragEle = await iframe.locator('#draggable');
    const dropEle = await iframe.locator('#droppable');

    await dragEle.dragTo(dropEle)
    await page.waitForTimeout(6000)

})

test('Test 3',{tag:['@regression']}, async ({ page }) => {
    await page.goto('https://jqueryui.com/droppable/');
    console.log(`Test 3...`)

    const iframe = page.frameLocator('.demo-frame');
    // drag and drop
    const dragEle = await iframe.locator('#draggable');
    const dropEle = await iframe.locator('#droppable');

    await dragEle.dragTo(dropEle)
    await page.waitForTimeout(6000)

})

// terminal command to execute
//npx playwright test --grep '@smoke'
//npx playwright test --grep '@regression'

//npx playwright test Chapter03/01_Tags_Test.spec.ts --repeat-each=3