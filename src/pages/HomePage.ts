import{Page,expect} from '@playwright/test';

export default class HomePage{
  private readonly homeTitleSelector ='Home | Salesforce';

    constructor(private page:Page){

    }
 async expectServiceTitleToBeVisible() {
   const title = await this.page.title();
console.log('Title of the page:', title);
expect(title).toBe('Home | Salesforce'); 
    }
}