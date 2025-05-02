import { chromium, test, expect } from "@playwright/test";

test('Interact with frames', async ({page})=>{
    test.setTimeout(120000);
    await page.goto('https://letcode.in/frame')
    const allFrames = page.frames();
    console.log(allFrames.length);

    const myFrame = page.frame("firstFr")
    // if(myFrame != null){
    //     await myFrame.fill('','')
    // }
    await myFrame?.fill("input[name='fname']", 'S')  //optional chaining  if not null then fill
    await myFrame?.fill("input[name='lname']", 'K')  //optional chaining  if not null then fill
    expect(await myFrame?.locator('p.has-text-info').textContent()).toContain('You have entered')
    await page.waitForTimeout(3000)
})

test('frames', async({page})=>{
    test.setTimeout(120000);
    await page.goto('https://letcode.in/frame')
    const frame = page.frameLocator('#firstFr')
    await frame.locator("input[name='fname']").fill('S')
    await frame.locator("input[name='lname']").fill('K')
    const innerFrame = frame.frameLocator("iframe[src='innerframe']")
    await innerFrame.locator("input[name='email']").scrollIntoViewIfNeeded()
    await innerFrame.locator("input[name='email']").fill('skd@hotmail.in')
    await frame.locator("input[name='fname']").scrollIntoViewIfNeeded()
    await frame.locator("input[name='fname']").fill('SSSSSS')
    await page.waitForTimeout(3000)
})