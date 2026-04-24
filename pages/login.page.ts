import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}
//navigate to login page
  async goto() {
    await this.page.goto('https://www.saucedemo.com');
  }
//login with given credentials
  async login(username: string, password: string) {
    await this.page.fill('#user-name', username);
    await this.page.fill('#password', password);
    await this.page.click('#login-button');
  }
}