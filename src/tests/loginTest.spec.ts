import{test,expect} from '@playwright/test';
import HomePage from '../pages/HomePage';

test('LoginTest',async({page})=>{
    await page.goto('https://business-java-2541.lightning.force.com/lightning/page/home'); 
   const homePage =new HomePage(page);
   await homePage.expectServiceTitleToBeVisible();


})