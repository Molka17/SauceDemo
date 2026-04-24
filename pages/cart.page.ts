import { Page, expect } from '@playwright/test';

export class CartPage {
  constructor(private page: Page) {}
//verify expected number
  async verifyItems() {
    await expect(this.page.locator('.cart_item')).toHaveCount(2);
  }
//click checkout button
  async checkout() {
    await this.page.click('#checkout');
  }
}