import { test, expect } from "@playwright/test";

test("amazon", async ({ page }) => {
    test.setTimeout(120000);
    await page.goto("playwrightTypeScript/tests/Practice/amazon.test.ts")
   
})