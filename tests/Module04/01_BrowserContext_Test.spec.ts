import{test,expect} from '@playwright/test'

test('Multiple browser/tabs', async({page, browser})=>{
    test.setTimeout(120000);
    await page.goto('https://jqueryui.com/droppable/');

    let iframe=page.frameLocator('.demo-frame');
    // drag and drop
   let dragEle= await iframe.locator('#draggable');
   let dropEle= await iframe.locator('#droppable');

   await dragEle.dragTo(dropEle);
   await page.waitForTimeout(6000);

   // New browser session
   const context2 = await browser.newContext();
   const page2 = await context2.newPage();

   test.setTimeout(120000);
   await page2.goto('https://jqueryui.com/droppable/');

   const iframe2=page2.frameLocator('.demo-frame');
   // drag and drop
  const dragEle2= await iframe2.locator('#draggable');
  const dropEle2= await iframe2.locator('#droppable');

  await dragEle2.dragTo(dropEle2);
  await page2.waitForTimeout(6000);

  // Create new tabs
  const newTab = await context2.newPage();
  
  test.setTimeout(120000);
  await newTab.goto("https://www.amazon.in/")
  await newTab.locator('#searchDropdownBox').selectOption('Baby')
  await newTab.waitForTimeout(6000)
  await newTab.locator('input#twotabsearchtextbox').fill('diapers')
  await newTab.waitForTimeout(6000)

})