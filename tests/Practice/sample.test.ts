
import { test, expect } from '@playwright/test'


test("Sample test", async ({ page }) => {

    await page.goto('https://cabtalk.gxinetworks.in');
    await page.locator("//input[@placeholder='Enter your email']").fill('tester@gmail.com');

    await page.locator("//input[@placeholder='Enter your password']").fill('Test@123');
    await page.getByRole('button', { name: 'Log In' }).click();
    await page.locator("//div[text()='Assets']").click();
    await page.getByRole('button', { name: 'Add Asset' }).click();
    // await page.locator("//select[@name='driverId']").selectOption('AA88AA8888');
    await page.getByRole('combobox').selectOption('686ce4401d477bc747ce5ba0');
    await page.locator("//input[@name='capacity']").fill('4');
    await page.getByRole('button', { name: 'Add Asset' }).click();

    expect(page.getByText('AA88AA8888')).toBeVisible({ timeout: 60000 });
    await page.locator("//td[text()='AA88AA8888']/../td[5]/button").click();
    await page.locator("//label[text()='Select Slot:']/../select").selectOption('Morning1');

    await page.locator("//label[text()='Select Timing:']/../select").selectOption('06:30 am to 03:30 pm');
    await page.locator("//span[text()='Sandeep Mishra']/../input").check();

    await page.locator("//span[text()='Mon']/../input").check();
    await page.locator("//span[text()='Tue']/../input").check();
    await page.locator("//span[text()='Wed']/../input").check();
    await page.locator("//span[text()='Thu']/../input").check();
    await page.locator("//span[text()='Fri']/../input").check();

    await page.getByRole('button', { name: 'Add Passenger' }).click();





})