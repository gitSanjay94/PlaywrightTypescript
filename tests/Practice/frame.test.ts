import{test, expect } from '@playwright/test'

test('Frames', async({page})=>{
     test.setTimeout(120000);
    await page.goto("https://the-internet.herokuapp.com/nested_frames");
    
    // for(Frame childFrame : page.mainFrame().childFrames()){
    //     console.log(childFrame.name());  //frame-top, frame-bottom
    // }
    // Frame main_frame = page.mainFrame();
    // Frame top_frame = main_frame.childFrames().get(0);
    // Frame bottom_frame = main_frame.childFrames().get(1);

    // Frame left_frame = top_frame.childFrames().get(0);
    //  Frame middle_frame = top_frame.childFrames().get(1);
    //   Frame right_frame = top_frame.childFrames().get(2);

    //   console.log(left_frame.locator(body).innertext());
    //         console.log(middle_frame.locator(body).innertext());
    //               console.log(right_frame.locator(body).innertext());


})