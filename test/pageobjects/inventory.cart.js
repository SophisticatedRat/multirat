import { expect } from '@wdio/globals'
import { $ } from '@wdio/globals'
import Page from './page.js'
import LoginPage from '../pageobjects/login.page.js';



class Cart extends Page {
    get addbl () {
        return $('#add-to-cart-sauce-labs-bike-light')
    }
    get addbp () {
        return $('#add-to-cart-sauce-labs-backpack')
    }
    get cbadge () {
        return $('.shopping_cart_badge')
    }
    get carticon () {
        return $('.shopping_cart_link')
    }
    get removebl () {
        return $('#remove-sauce-labs-bike-light')
    }
    get removebp () {
        return $('#remove-sauce-labs-backpack')
    }
    get continue () {
        return $('#continue-shopping')
    }
    get checkout () {
        return $('#checkout')
    }
    get cancel () {
        return $('#cancel')
    }

    async cartcheck(){
        await $('.shopping_cart_link').waitForExist();
        await this.addbl.click();
        await this.addbp.click();
        await this.cbadge.waitForExist(true);
        await this.carticon.click();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html');
        await this.continue.click();
        await $('.shopping_cart_link').waitForExist();
        await this.carticon.click();
        await this.checkout.click();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-one.html');
        await this.cancel.click();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html');
        await this.removebl.click();
        await this.removebl.waitForExist({reverse: true});
        await this.removebp.click();
        await this.removebp.waitForExist({reverse: true});
    }
}
export default new Cart();