import { test, expect } from '@playwright/test'

test('Get Text and Get attribute', async ({ page }) => {
    test.setTimeout(120000);
    await page.goto("https://github.com/gitSanjay94");

    // const name = await page.locator("[itemprop='name']").textContent();
    const name = await page.locator("[itemprop='name']").innerText();
    const finalName = name?.trim();
    console.log(`Name is : ${finalName}`)
    expect(finalName).toBe('Sanjay Kumar Das');

    const attributeValue = await page.getByTestId('repositories').first().getAttribute('data-selected-links');
    console.log(`Attribute value is : ${attributeValue}`);
})