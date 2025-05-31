import { test, expect } from '@playwright/test'
import testData from '../../test-data/qa/testdata.json'

type TestData = {
    TestDataSet1: {
        Skill1: string,
        Skill2: string
    },
    TestDataSet2: {
        Skill1: string,
        Skill2: string
    }
}
const typesTestData = testData as TestData;
for (const dataSetName in typesTestData) {

    const skill = typesTestData[dataSetName as keyof TestData];
    test(`Data Driven Testing using JSON file : ${skill.Skill1}`, async ({ page }) => {
        test.setTimeout(120000);
        await page.goto(`https://www.google.com/`);

        await page.getByRole('combobox', { name: 'Search' }).fill(skill.Skill1);
        await page.getByRole('combobox', { name: 'Search' }).press('Enter');

        // await page.getByRole('link', { name: skill.Skill1 }).first().click();
    })
}
