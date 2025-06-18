import { test as base } from '@playwright/test'
import { PlaylistPage } from '../pages/PlaylistPage';
import { ResultPage } from '../pages/ResultPage';
import { HomePage } from '../pages/HomePage';

export const test = base.extend<{ 
    savelogs: void; 
    homePage: HomePage;
    resultPage: ResultPage;
    playlistPage: PlaylistPage;

}>({
    savelogs: [async ({ }, use) => {
        console.log('Global before is running...');

        await use();

        console.log('Global afterEach is running...');
    },
    { auto: true }],
    homePage: async ({page}, use)=>{
        const homePage = new HomePage(page);
        await use(homePage);
    },
    resultPage: async ({page}, use)=>{
        const resultPage = new ResultPage(page);
        await use(resultPage);
    },
    playlistPage: async ({page}, use)=>{
        const playlistPage = new PlaylistPage(page);
        await use(playlistPage);
    },
});

export { expect } from '@playwright/test'