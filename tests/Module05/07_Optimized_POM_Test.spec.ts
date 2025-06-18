
import { test } from "../../src/fixture/TestFixture"

test('Page Object Model Test', async ({ page, homePage, resultPage, playlistPage }) => {
    test.setTimeout(120000);

    await homePage.goToURL();
    await homePage.searchWithKeywords(`${process.env.SEARCH_KEYWORDS}`);

    await page.waitForTimeout(8000);
    await resultPage.clickOnPlaylist(`${process.env.SEARCH_KEYWORDS}`);

    await page.waitForTimeout(8000);
    await playlistPage.validatePageTitle(`${process.env.SEARCH_KEYWORDS}` + '☑️ - YouTube');
})