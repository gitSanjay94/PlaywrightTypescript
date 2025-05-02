import{test,expect} from '@playwright/test'

test('Locators in Playwright', async ({page})=>{
    test.setTimeout(120000);
// await page.goto('https://github.com/BakkappaN/');

// getByRole
// await page.getByRole('link', { name: 'Sign in' }).click();

// getByLabel...aria-label="Homepage"
// await page.getByLabel('Homepage',{exact:true}).first().click();

// getByAltText...alt="View BakkappaN's full-sized avatar"
// await page.getByAltText("View BakkappaN's full-sized avatar").click();

// getByTest...data-tab-item="repositories"...in playwright.config.ts
// await page.getByTestId('repositories').first().click();

// getByText
// await page.getByText("Sign up").click();

// getByPlaceholder, xpath, CSSSelectors
// await page.goto("https://www.youtube.com/@testerstalk");
// await page.getByPlaceholder('Search').fill('testers talk');
// await page.locator("//input[@name='search_query']").fill('testers talk');
// await page.locator("input[name='search_query']").type('testers talk');

await page.goto("https://www.google.com/")
await page.getByTitle('Search').fill('tools for automation')  //title="Search"
await page.getByTitle('Search').type('tools for automation')  
// Feature	                    fill()	                    type()
// Clears existing text	         Yes	                    No
// Simulates typing	             No (sets value directly)	Yes (types each character)
// Speed	                     Faster	                    Slower (more realistic)
//Use case	                     Form-filling	            Typing simulations/events testing
});

