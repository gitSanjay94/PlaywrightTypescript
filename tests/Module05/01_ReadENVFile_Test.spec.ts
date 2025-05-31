import{test,expect} from '@playwright/test'

test('Read ENV file config', async ({page}) => {
 test.setTimeout(120000);
    await page.goto(`${process.env.GOOGLE_URL}`);

    await page.getByRole('combobox', { name: 'Search' }).fill('playwright by testers talk');
    await page.getByRole('combobox', { name: 'Search' }).press('Enter');

    await page.getByRole('link', { name: 'Playwright by Testers Talk☑️' }).first().click();
})

// first it will fail so install the following dependency
// npm install dotenv --save

// uncomment the following from playwright.config.ts
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });
