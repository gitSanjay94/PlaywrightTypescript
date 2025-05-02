import { chromium, test, expect } from "@playwright/test";

test('Download files', async ({page})=>{
    test.setTimeout(120000);
    await page.goto("https://www.lambdatest.com/selenium-playground/generate-file-to-download-demo");
    await page.type("#textbox", "like ,share, commrent")
   
    await page.keyboard.press('Tab');

    expect(page.getByRole('button', { name: 'Generate File' })).toBeVisible({timeout: 60000})
 
    await page.getByRole('button', { name: 'Generate File' }).scrollIntoViewIfNeeded();
    // await page.click("#link-to-download")
    await page.getByRole('button', { name: 'Generate File' }).click({force:true});
    const download = await Promise.all([
        page.waitForEvent('download'),
         page.getByRole('link', { name: 'Download' }).click()
    ])
    // const fileName = await download[0].suggestedFilename();
    // await download[0].saveAs(fileName);
   
    page.on('download', download => download.path().then(console.log))
    // const path = await download[0].path();
    // console.log(path)   
})

test('Upload files', async ({page})=>{
    test.setTimeout(120000);
    await page.goto('https://blueimp.github.io/jQuery-File-Upload/')
    // await page.setInputFiles("input[type='file']", 
    //     ["uploadItems/SDET_Challenge.pdf", "uploadItems/AajTak_TestCases.xlsx"]);
    
    const [uploadFiles] = await Promise.all([
        page.waitForEvent("filechooser"),
        page.click("input[type='file']")
    ])
    const isMultiple = uploadFiles.isMultiple();
    console.log(isMultiple);
    uploadFiles.setFiles(
        ["uploadItems/SDET_Challenge.pdf", "uploadItems/AajTak_TestCases.xlsx"]
    )
})