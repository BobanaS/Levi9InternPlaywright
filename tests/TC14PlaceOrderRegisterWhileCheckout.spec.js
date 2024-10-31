const { test, expect } = require('@playwright/test')
import { cartPage } from '../pages/cartPage'
import { LoginPage } from '../pages/loginPage'
import { navbarPage } from '../pages/navbarPage'
import { productsPage } from '../pages/productsPage'
import { checkOutPage } from '../pages/checkOutPage'
import { paymentPage } from '../pages/paymentPage'



test.describe("Test Case 14: Place Order Register while Checkout ", () => {

    test("Place Order: Register while Checkout", async ({ page }) => {

        //npx playwright test -g "TC14PlaceOrderRegisterWhileCheckout.spec" --ui
        let loginPage = new LoginPage(page)
        let navBarPage = new navbarPage(page)
        let carTPage = new cartPage(page)
        let productsAlll = new productsPage(page)
        let checkOutpage = new checkOutPage(page)
        let paymentpage = new paymentPage(page)



        //1. Launch browser
        await loginPage.openApp()

        //3. Verify that home page is visible successfully

        await expect(page).toHaveURL(loginPage.getApplicationUrl())

        //Click 'Products' button

        await navBarPage.chooseOption(navBarPage.product)
        //Add products to cart
        await productsAlll.addtoCartF()
        //5. Click 'Cart' button
        await productsAlll.viewCartt(0)
        //6. Verify that cart page is displayed

        await expect(carTPage.checkoutButton).toBeVisible()
        //7. Click Proceed To Checkout

        await carTPage.clickCheckOut()
        //8. Click 'Register / Login' button

        await carTPage.clickRegister()
        //9. Fill all details in Signup and create account
        await loginPage.signup("pera", "mmiiicccii@tittkki.com")
        await loginPage.enterUserSignup()

        //10. Verify 'ACCOUNT CREATED!' and click 'Continue' button
        await expect(loginPage.createMessage).toBeVisible()
        await loginPage.clickContinue()
        //11. Verify ' Logged in as username' at top
        await expect(productsAlll.mess).toBeVisible()
        //12.Click 'Cart' button
        await navBarPage.chooseOption(navBarPage.cart)
        //13. Click 'Proceed To Checkout' button
        await carTPage.clickCheckOut()
        //14. Verify Address Details and Review Your Order
        await expect(checkOutpage.productName).toBeVisible()
        //15. Enter description in comment text area and click 'Place Order'
        await checkOutpage.writeMessage("Caooo")
        await checkOutpage.placecheck()
        //16. Enter payment details: Name on Card, Card Number, CVC, Expiration date
        paymentpage.fillCardInfo()
        //17. Click 'Pay and Confirm Order' button

        // Verify success message 'Your order has been placed successfully!'
        await expect(paymentpage.message).toBeVisible()
        //19. Click 'Delete Account' button
        await navBarPage.chooseOption(navBarPage.delete)
        //20. Verify 'ACCOUNT DELETED!' and click 'Continue' button

        await page.getByText("Account Deleted!").isVisible()
    })
})