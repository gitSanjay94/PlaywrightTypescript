import { test } from '@playwright/test'
import { HomePage } from '../../src/pages/HomePage'
import { ResultPage } from '../../src/pages/ResultPage';
import { PlaylistPage } from '../../src/pages/PlaylistPage';

test('Page Object Model Test', async ({ page }) => {
test.setTimeout(120000);
console.log('  ');
    // Create object of homepage
    const homepage = new HomePage(page);
    await homepage.goToURL();
    await homepage.searchWithKeywords(`${process.env.SEARCH_KEYWORDS}`);

    // Create object of resultpage
    const resultpage = new ResultPage(page);
    await page.waitForTimeout(8000);
    await resultpage.clickOnPlaylist(`${process.env.SEARCH_KEYWORDS}`);

    // Create object of playlistpage
    const playlistpage = new PlaylistPage(page);
     await page.waitForTimeout(8000);
    await playlistpage.validatePageTitle(`${process.env.SEARCH_KEYWORDS}` + '☑️ - YouTube');
})