const { test, expect } = require('@playwright/test')
import { cartPage } from '../pages/cartPage'
import { LoginPage } from '../pages/loginPage'
import { navbarPage } from '../pages/navbarPage'
import { productsPage } from '../pages/productsPage'
import { productPage } from '../pages/productPage'



test.describe("Test Case 13: Verify Product quantity in Cart", () => {

    test("Verify Product quantity in Cart", async ({page }) => {

        //npx playwright test -g "TC13.VerifyProductQuantity.spec" --ui
        let loginPage=new LoginPage(page)
        let navBarPage=new navbarPage(page)
        let carTPage=new cartPage(page)
        let productsAlll=new productsPage(page)
        let productOne= new productPage(page)
      
        
        //1. Launch browser
        await loginPage.openApp()

        //3. Verify that home page is visible successfully

        await expect(page).toHaveURL(loginPage.getApplicationUrl())

        //Click 'Products' button

        await navBarPage.chooseOption(navBarPage.product)

        //3. Verify that home page is visible successfully

        await expect (productsAlll.allProduct).toBeVisible()
        
        //4. Click 'View Product' for any product on home page

        await productsAlll.clickOnviewProduct()
        //5. Verify product detail is opened
        await expect(productOne.productBlueTopdetails).toBeTruthy
        //6. Increase quantity to 4

        await productOne.increaseQuantity(4)
        //7. Click 'Add to cart' button
        await productOne.addToCartAction()

        //8. Click 'View Cart' button

        await productOne.viewCart.click()
        //9. Verify that product is displayed in cart page with exact quantity
        await expect(await carTPage.checkQuantity(4)).toBe(true)
    })
})