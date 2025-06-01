import { test, expect } from '@playwright/test'

import path from 'path';
import {readExcelFile} from '../../src/utils/ExcelHelper';

const filePath = path.join(__dirname,'../../test-data/qa/testdata.xlsx');
const records = readExcelFile(filePath);



//Iterate over csv data
for (const record of records) {
    test(`Data Driven Testing using EXCEL file : ${record.Skill1}`, async ({ page }) => {
        test.setTimeout(120000);
        await page.goto(`https://www.google.com/`);

        // await page.getByRole('combobox', { name: 'Search' }).fill(record.Skill1);
        await page.getByRole('combobox', { name: 'Search' }).fill(record.Skill2);
        await page.getByRole('combobox', { name: 'Search' }).press('Enter');

    })
}



