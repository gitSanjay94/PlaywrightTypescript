import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  await test.step('Navigating to URL', async () => {
    test.setTimeout(120000);
    await page.goto('https://github.com/');
    await page.getByRole('link', { name: 'Sign in' }).click();
  })

  await test.step('Enter username and password', async () => {
    await page.getByRole('textbox', { name: 'Username or email address' }).click();
    await page.getByRole('textbox', { name: 'Username or email address' }).fill('test');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('test!123');
  })

  await test.step('Click on sign in', async () => {
    await page.getByRole('button', { name: 'Sign in', exact: true }).click();
  })

  await test.step('Validate error message', async () => {
    await expect(page.getByRole('alert')).toContainText('Incorrect username or password.');
  })

});