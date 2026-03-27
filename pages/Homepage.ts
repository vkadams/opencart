import {Page, Locator, expect} from '@playwright/test';

export class Homepage
{
  private readonly page: Page;
  // locators
  private readonly lnkMyAccount: Locator;
  private readonly lnkRegister: Locator;
  private readonly lnkLogin: Locator;
  private readonly txtSearchBox: Locator;
  private readonly btnSearch: Locator;

  // constructor
  constructor(page: Page)
  {
    this.page = page;

    this.lnkMyAccount = page.locator('span:has-text("My Account")');
    this.lnkRegister = page.locator('a:has-text("Register")');
    this.lnkLogin = page.locator('a:has-text("Login")');
    this.txtSearchBox = page.locator('input[placeholder="Search"]');
    this.btnSearch = page.locator('#search button[type="button"]')
  }

  // action methods

  // check homepage exists or not-
  async isHomepageExist()
  {
    let title: string = await this.page.title();
    if(title)
    {
      return true;
    }
    return false;
  }

  async clickMyAccountLink()
  {
    try{
      await this.lnkMyAccount.click()
    }
    catch (error) {
      console.log(`Exception occured while clicking 'My Account', ${error}`);
      throw error;
    }
  }

  async clickLogin()
  {
    try{
      await this.lnkLogin.click()
    }
    catch (error) {
      console.log(`Exception occured while clicking 'Login', ${error}`);
      throw error;
    }
  }

  // Enter product name in search box
  async enterProductName(pName: string)
  {
    try{
      await this.txtSearchBox.fill(pName);
    }
    catch(error){
      console.log(`Exception occured while entering product name, ${error}`);
      throw error;
    }
  }

  // search button click
  async clickSearch()
  {
    try{
      await this.btnSearch.click();
    }
    catch(error){
      console.log(`Exception occured while clicking 'Search', ${error}`);
      throw error;
    }
  }
}