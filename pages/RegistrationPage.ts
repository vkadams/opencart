import {Page, Locator, expect} from '@playwright/test';

export class RegistrationPage
{
  private readonly page: Page;

  // locators
  private readonly txtFirstname: Locator;
  private readonly txtlastname: Locator;
  private readonly txtEmail: Locator;
  private readonly txtTelephone: Locator;
  private readonly txtPassword: Locator;
  private readonly txtConfirmPassword: Locator;
  private readonly chkdPolicy: Locator;
  private readonly btnContinue: Locator;
  private readonly msgConfirmation: Locator;

  // constructor
  constructor(page: Page)
  {
    this.page = page;

    // initializing locators
    this.txtFirstname = page.locator('#input-firstname');
    this.txtlastname = page.locator('#input-lastname');
    this.txtEmail = page.locator('#input-email');
    this.txtTelephone = page.locator('#input-telephone');
    this.txtPassword = page.locator('#input-password');
    this.txtConfirmPassword = page.locator('#input-confirm');
    this.chkdPolicy = page.locator('input[value="1"][name="agree"]');
    this.btnContinue = page.locator('input[value="Continue"]');
    this.msgConfirmation = page.locator('h1:has-text("Your Account Has Been Created!")');
  }

  /**
   * sets the first name in the registration form
   * @param fname - First name to enter
   */
  async setFirstName(fname: string): Promise<void>
  {
    await this.txtFirstname.fill(fname);
  }

   /**
   * sets the last name in the registration form
   * @param lname - Last name to enter
   */
  async setLastName(lname: string): Promise<void>
  {
    await this.txtlastname.fill(lname);
  }

  /**
   * sets the email in the registration form
   * @param email - Email to enter
   */
  async setEmail(email: string): Promise<void>
  {
    await this.txtEmail.fill(email);
  }

  /**
   * sets the telephone number in the registration form
   * @param tel - Telephone number to enter
   */
  async setTelephone(tel: string): Promise<void>
  {
    await this.txtEmail.fill(tel);
  }

  /**
   * sets the password in the registration form
   * @param pwd - password to enter
   */
  async setPassword(pwd: string): Promise<void>
  {
    await this.txtEmail.fill(pwd);
  }

  /**
   * sets the confirm password in the registration form
   * @param pwd -  password to confirm
   */
  async setConfirmPassword(pwd: string): Promise<void>
  {
    await this.txtEmail.fill(pwd);
  }

   /**
   * checks the privacy policy checkbox
   */
  async setPrivacyPolicy(): Promise<void>
  {
    await this.chkdPolicy.check();
  }

  /**
   * clicks continue button
   */
  async clickContinue(): Promise<void>
  {
    await this.btnContinue.click();
  }

  /**
   * gets confirmation message text
   * @returns Promise<string>- confirmation message text
   */
  async getConfirmationMsg(): Promise<string>
  {
    return await this.msgConfirmation.textContent() ?? '';
  }

  /**
   * complete registration workflow
   * @param userData- object containing registration data
   */
  async completeRegistration(userData:
    {
      firstName: string;
      lastName: string;
      email: string;
      telephone: string;
      password: string
    }): Promise<void>
  {
    await this.setFirstName(userData.firstName);
    await this.setLastName(userData.lastName);
    await this.setEmail(userData.email);
    await this.setTelephone(userData.telephone);
    await this.setPassword(userData.password);
    await this.setConfirmPassword(userData.password);
    await this.setPrivacyPolicy();
    await this.clickContinue();
    await expect(this.msgConfirmation).toBeVisible();
  }
}