import { test, expect } from '@playwright/test'

import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync'

//Store CSV data in a variable
const records = parse(fs.readFileSync(path.join(__dirname, "../../test-data/qa/testdata.csv")), {
    columns: true,
    skip_empty_lines: true
});


//Iterate over csv data
for (const record of records) {
    test(`Data Driven Testing using CSV file : ${record.Skill1}`, async ({ page }) => {
        test.setTimeout(120000);
        await page.goto(`https://www.google.com/`);

        // await page.getByRole('combobox', { name: 'Search' }).fill(record.Skill1);
        await page.getByRole('combobox', { name: 'Search' }).fill(record.Skill2);
        await page.getByRole('combobox', { name: 'Search' }).press('Enter');

    })
}



