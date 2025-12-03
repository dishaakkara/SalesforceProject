import{test,expect} from '@playwright/test';
import HomePage from '../pages/HomePage';
import logger from '../utils/logger';

test.skip('LoginTest',async({page})=>{
    await page.goto('https://business-java-2541.lightning.force.com/lightning/page/home'); 
   const homePage =new HomePage(page);
   await homePage.expectServiceTitleToBeVisible();


})
test('sample dotenv',async()=>{
    // console.log(process.env.NODE_ENV);
    logger.info("environment"+process.env.NODE_ENV)
    // console.log(process.env.username);
    // console.log(process.env.password);
})