import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import Menu from '../pageobjects/inventory.menu.js'
import Cart from '../pageobjects/inventory.cart.js'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.opensignin('standard_user', 'secret_sauce')

        await Menu.menucheck()

        await LoginPage.opensignin('standard_user', 'secret_sauce')

        await Cart.cartcheck()
    })
})
