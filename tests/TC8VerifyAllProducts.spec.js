const { test, expect } = require('@playwright/test')
import { LoginPage } from '../pages/loginPage'
import { navbarPage } from '../pages/navbarPage'
import { productPage } from '../pages/productPage'
import { productsPage } from '../pages/productsPage'


test.describe("Test Case 8: Verify All Products and product detail page", () => {

    test("Verify All Products and product detail page", async ({page }) => {

        //npx playwright test -g "TC8VerifyAllProducts.spec" --ui

        let loginPage=new LoginPage(page)
        let navBarPage=new navbarPage(page)
        let productPagee=new productPage(page)
        let productsAll= new productsPage(page)

        //open application
        await loginPage.openApp()

        //verify that home page is visible successfully
        await expect(page).toHaveURL(loginPage.getApplicationUrl())
      
        //Click on 'Products' button
        await navBarPage.chooseOption(navBarPage.product)

        //Verify user is navigated to ALL PRODUCTS page successfully

        await expect(page).toHaveURL(productsAll.pageURL)


        //The products list is visible

        await expect (productsAll.allProduct).toBeVisible()

        //Click on 'View Product' of first product
        await productsAll.clickOnviewProduct()
        // User is landed to product detail page

        await expect(page).toHaveURL(productPagee.productURL)
        //Verify that detail detail is visible: product name, category, price, availability, condition, brand
        await expect(productPagee.productInformation).toBeVisible()
        await expect(productPagee.productBlueTopdetails).toBeTruthy()
    })
})

