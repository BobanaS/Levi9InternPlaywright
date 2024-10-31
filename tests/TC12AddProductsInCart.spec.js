const { test, expect } = require('@playwright/test')
import { cartPage } from '../pages/cartPage'
import { LoginPage } from '../pages/loginPage'
import { navbarPage } from '../pages/navbarPage'
import { productsPage } from '../pages/productsPage'



test.describe("Test Case 12: Add Products in Cart", () => {

    test("Add Products in Cart", async ({page }) => {

        //npx playwright test -g "TC12AddProductsInCart.spec" --ui
        let loginPage=new LoginPage(page)
        let navBarPage=new navbarPage(page)
        let carTPage=new cartPage(page)
        let productsAll=new productsPage(page)
        
        
        //open application
        await loginPage.openApp()

        //verify that home page is visible successfully
        await expect(page).toHaveURL(loginPage.getApplicationUrl())

        //Click 'Products' button

        await navBarPage.chooseOption(navBarPage.product)

        // Hover over first product and click 'Add to cart'

        await productsAll.addtoCartF()

        // Click 'Continue Shopping' button

        await productsAll.continueShoping()
        
       // Hover over second product and click 'Add to cart'
        
        await productsAll.addtoCartS()

        // Click 'View Cart' button

        await productsAll.viewCartt()
    
        // Verify both products are added to Cart
        
        await expect (carTPage.product1).toBeVisible()
        await expect (carTPage.product2).toBeVisible()

        // Verify their prices, quantity and total price
        await expect(carTPage.productInfo(carTPage.product1)).toBeTruthy
        await expect(carTPage.productInfo(carTPage.product2)).toBeTruthy

    })
})