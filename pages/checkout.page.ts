import { Page, expect } from '@playwright/test';

export class CheckoutPage {
  constructor(private page: Page) {}
//fill the checkout form
  async fillForm() {
    await this.page.fill('#first-name', 'Molka');
    await this.page.fill('#last-name', 'belarbi');
    await this.page.fill('#postal-code', '91120');
    await this.page.click('#continue');
  }
//finish the order
  async finishOrder() {
    await this.page.click('#finish');
  }
//verify confirmation message 
  async verifyConfirmation() {
    await expect(this.page.locator('.complete-header'))
      .toHaveText('Thank you for your order!');
  }
}