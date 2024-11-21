import { expect } from '@wdio/globals'
import { $ } from '@wdio/globals'
import Page from './page.js'
import LoginPage from '../pageobjects/login.page.js';



class Menu extends Page {
    
    get menuicon () {
        return $('#react-burger-menu-btn');
    }
    get menuX () {
        return $('#react-burger-cross-btn');
    }
    get mclose () {
        return $('//div[@hidden="true"]');
    }
    get mitems () {
        return $('#inventory_sidebar_link');
    }
    get mabout () {
        return $('#about_sidebar_link');
    }
    get mlogout () {
        return $('#logout_sidebar_link');
    }
    get addfl () {
        return $('#add-to-cart-sauce-labs-fleece-jacket')
    }
    get mreset () {
        return $('#reset_sidebar_link');
    }
    get cbadge () {
        return $('.shopping_cart_badge');
    }

    async menucheck() {
        await $('#react-burger-menu-btn').waitForExist();
        await this.menuicon.click();
        await this.mitems.click();
        await this.menuX.click();
        await expect(this.mclose).toExist();
        await LoginPage.opensignin('standard_user', 'secret_sauce');
        await $('#react-burger-menu-btn').waitForExist();
        await this.menuicon.click();
        await this.mabout.click();
        await expect(browser).toHaveUrl('https://saucelabs.com/');
        await LoginPage.opensignin('standard_user', 'secret_sauce');
        await $('#react-burger-menu-btn').waitForExist();
        await this.menuicon.click();
        await this.mlogout.click();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/');
        await LoginPage.opensignin('standard_user', 'secret_sauce');
        await $('#react-burger-menu-btn').waitForExist();
        await this.menuicon.click();
        await this.addfl.click();
        await this.cbadge.waitForExist(true);
        await this.mreset.click();
        await browser.pause(3000);
        await this.cbadge.waitForExist({reverse: true});
    }

    web(){
        return super.web('/inventory.html')
    }
}
export default new Menu();