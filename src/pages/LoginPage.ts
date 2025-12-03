import{Page} from '@playwright/test';
import HomePage from "./HomePage";
export default class LoginPage{

    private readonly userInputSelector = '#username';
    private readonly passwordInputSelector = '#password';
    private readonly loginButtonSelector = '#Login';
    

    constructor(private page :Page){

    }
   async navigateTologinPage(){
    await this.page.goto("https://login.salesforce.com/");
   }
   async fillUserName(username : string) {
    await this.page.locator(this.userInputSelector).fill(username);
   }
   async fillPassword(password : string) {
    await this.page.locator(this.passwordInputSelector).fill(password);
   }
   async clickLogin(){
    await this.page.locator(this.loginButtonSelector).click().catch(

(error)=>{
    console.error("error while clicking login button:${error}");
    throw error;
})
const homePage = new HomePage(this.page);
return homePage;

}
}