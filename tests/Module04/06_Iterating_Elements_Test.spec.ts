import { test, expect } from '@playwright/test'

test('Iterating matching elements', async ({ page }) => {
    test.setTimeout(120000);
    await page.goto("https://github.com/BakkappaN");

    const repoLinks = await page.$$("[class='repo']");
    for (const element of repoLinks) {
        const text = await element.textContent();
        console.log(`Text from 1st loop : ${text}`);
    }

    console.log(`========================================`)
    for (let index = 0; index < repoLinks.length; index++) {
        const element2 = await repoLinks[index].textContent();
        console.log(`Text from 2nd loop : ${element2}`);
    }
    console.log(`========================================`)
    const repoLinks2 = await page.locator(".repo");
    const count = await repoLinks2.count();
    for (let index = 0; index < count; index++) {
        const text = await repoLinks2.nth(index).textContent();
        console.log(`Text from 3rd loop : ${text}`);
    }
})