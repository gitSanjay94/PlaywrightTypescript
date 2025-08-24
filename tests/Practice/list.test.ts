
import { test, expect } from '@playwright/test'

test('List', async ({ page }) => {
    test.setTimeout(120000);
    await page.goto('https://training.rcvacademy.com/');
    await expect(page.getByRole('listitem')).toHaveCount(27);

    // await page.getByRole('listitem').filter({hasText: 'AUTOMATION PRACTICE PAGE'}).click();

    // expect(page.getByRole('heading',{name: 'Test Automation Practice Page'})).toBeVisible({timeout: 60000});

    const listSection = await page.locator("(//div[@class='dynamic-text'])[1]");
    await listSection.scrollIntoViewIfNeeded();
    await expect(listSection.getByRole('listitem')).toHaveCount(4);
    await expect(listSection.getByRole('listitem')).toContainText(['Per month price', 'Cancel anytime']);
    await expect(listSection.getByRole('listitem').filter({ hasText: 'Access all currently published courses' })).toHaveText('Access all currently published courses');

})