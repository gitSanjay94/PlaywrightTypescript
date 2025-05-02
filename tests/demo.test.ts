import {  test, expect } from "@playwright/test";
import fs from 'fs';
import path from 'path';
import {parse} from 'csv-parse/sync'

//Store CSV data in a variable
const records = parse(fs.readFileSync(path.join(__dirname,"../uploadItems/amazonPhoneNumber.csv")),{
    columns:true,
    skip_empty_lines:true
});

//Iterate over csv data
for(const record of records){
    test(`data for phone number ${record.SerialNo}`, async({page})=>{
        test.setTimeout(120000);
        await page.goto("https://www.amazon.in/")
        await page.getByRole('link', { name: 'Hello, sign in Account & Lists' }).click();
        // await page.getByRole('textbox', { name: 'Email or mobile phone number' }).click();
       console.log(record.phoneNumber)
        await page.locator("#ap_email_login").click();
       
        await page.locator("#ap_email_login").fill(record.phoneNumber);
       
        await page.getByRole('button', { name: 'Continue' }).click();
        // await expect(page.locator('xpath=//div[normalize-space(.)="Invalid mobile number"]')).toBeVisible();

   await page.waitForTimeout(6000)
    })
}




