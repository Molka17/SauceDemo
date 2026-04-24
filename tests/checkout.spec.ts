import { test } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { InventoryPage } from '../pages/inventory.page';
import { CartPage } from '../pages/cart.page';
import { CheckoutPage } from '../pages/checkout.page';

test('Checkout complet', async ({ page }) => {
  const login = new LoginPage(page);
  const inventory = new InventoryPage(page);
  const cart = new CartPage(page);
  const checkout = new CheckoutPage(page);

  await login.goto();
  await login.login('standard_user', 'secret_sauce');

  await inventory.addProducts();
  await inventory.goToCart();

  await cart.verifyItems();
  await cart.checkout();

  await checkout.fillForm();
  await checkout.finishOrder();
  await checkout.verifyConfirmation();
});