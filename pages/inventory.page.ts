import { Page } from '@playwright/test';

export class InventoryPage {
  constructor(private page: Page) {}
//add two products to cart
  async addProducts() {
    await this.page.click('#add-to-cart-sauce-labs-backpack');
    await this.page.click('#add-to-cart-sauce-labs-bike-light');
  }
//navigate to cart
  async goToCart() {
    await this.page.click('.shopping_cart_link');
  }
}