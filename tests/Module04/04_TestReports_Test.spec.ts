import { test } from '@playwright/test'

test.describe('Smoke testing', () => {
    test('Test 1', async ({ page }) => {
        console.log(`test 1...`)
        await page.goto('https://jqueryui.com/droppable/');

        const iframe = page.frameLocator('.demo-frame');
        // drag and drop
        const dragEle = await iframe.locator('#draggable');
        const dropEle = await iframe.locator('#droppable');

        await dragEle.dragTo(dropEle)
        await page.waitForTimeout(6000)

    })
})

test.describe('Regression testing', () => {

    test('Test 2', async ({ page }) => {
        console.log(`test 2...`)
        await page.goto('https://jqueryui.com/droppable/');

        const iframe = page.frameLocator('.demo-frame');
        // drag and drop
        const dragEle = await iframe.locator('#draggable');
        const dropEle = await iframe.locator('#droppable');

        await dragEle.dragTo(dropEle)
        await page.waitForTimeout(6000)

    })

    test('Test 3', async ({ page }) => {
        await page.goto('https://jqueryui.com/droppable/');
        console.log(`test 3...`)

        const iframe = page.frameLocator('.demo-frame');
        // drag and drop
        const dragEle = await iframe.locator('#draggable');
        const dropEle = await iframe.locator('#droppable');

        await dragEle.dragTo(dropEle)
        await page.waitForTimeout(6000)

    })

    test('Test 4', async ({ page }) => {
        console.log(`test 1...`)
        await page.goto('https://jqueryui.com/droppable/');

        const iframe = page.frameLocator('.demoframe');
        // drag and drop
        const dragEle = await iframe.locator('#draggable');
        const dropEle = await iframe.locator('#droppable');

        await dragEle.dragTo(dropEle)
        await page.waitForTimeout(6000)

    })
})