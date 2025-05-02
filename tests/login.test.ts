import { chromium, test, expect } from "@playwright/test";

test("Login test demo", async () => {
  test.setTimeout(120000); // Set timeout to 120 seconds

  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("https://ecommerce-playground.lambdatest.io/");
  let title = await page.title();
  console.log("title of page is ", title);

  // Wait for 60 seconds

  await page.hover("//a[@data-toggle='dropdown']//span[contains(.,'My account')]");

  await page.click("text=Login");
  //   await page.click("'Login'");
  // await page.getByRole('link', { name: 'Login' }).click();

  await expect(page.getByRole('heading', { name: 'Returning Customer' })).toBeVisible();
  await expect(page.getByText('E-Mail Address')).toBeVisible();
  await page.fill("input[name='email']", "acmeminds@gmail.com");
  await page.fill("input[name='password']", "Acmeminds@123");
  //   await page.getByRole('textbox', { name: 'E-Mail Address' }).click();
  //   await page.getByRole('textbox', { name: 'E-Mail Address' }).fill('acmeminds@gmail.com');
  await expect(page.getByText('Password', { exact: true })).toBeVisible();
  //   await page.getByRole('textbox', { name: 'Password' }).click();
  //   await page.getByRole('textbox', { name: 'Password' }).fill('Acmeminds@123');
  //   await page.getByRole('button', { name: 'Login' }).click();
  await page.click("input[value='Login']")
  await page.waitForTimeout(5000);
  await expect(page.locator("//h2[text()='My Account']")).toBeVisible();

  const newContext = await browser.newContext();

  const newPage = await newContext.newPage();
  await newPage.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/account");
  await newPage.waitForTimeout(5000)
});
