import{test, expect} from '@playwright/test'


test('Mock API response', async({page})=>{

    // Mock API response
    await page.route('*/**/api/v1/fruits', async route => {

        const response = await route.fetch();
        const json = await response.json();
        json.push({ name: 'Selenium', id:199});
        json.push({ name: 'Rest API', id:345});
        json.push({ name: 'Soap API', id:3890});
        json.push({ name: 'Appium', id:1912349});

        await route.fulfill({ response, json});
    })

    // Go to URL
    await page.goto('https://demo.playwright.dev/api-mocking/');

    // Validate text
    expect(page.getByText('Selenium')).toBeVisible({timeout: 60000});
    expect(page.getByText('Rest API')).toBeVisible({timeout: 60000});
    expect(page.getByText('Soap API')).toBeVisible({timeout: 60000});
    expect(page.getByText('Appium')).toBeVisible({timeout: 60000});

    await page.waitForTimeout(10000);

})