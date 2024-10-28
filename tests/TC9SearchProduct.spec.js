const { test, expect } = require('@playwright/test')
import { LoginPage } from '../pages/loginPage'
import { navbarPage } from '../pages/navbarPage'
import { productsPage } from '../pages/productsPage'


test.describe("Test Case 9: Search Product", () => {

    test("Verify Search Product", async ({page }) => {

        //npx playwright test -g "TC9SearchProduct.spec" --ui
        let loginPage=new LoginPage(page)
        let navBarPage=new navbarPage(page)
        let productsAll= new productsPage(page)

        //open application
        await loginPage.openApp()

        //verify that home page is visible successfully
        await expect(page).toHaveURL(loginPage.getApplicationUrl())
      
        //Click on 'Products' button
        await navBarPage.chooseOption(navBarPage.product)

        //Verify user is navigated to ALL PRODUCTS page successfully

        await expect(page).toHaveURL(productsAll.pageURL)

        //Enter product name in search input and click search button
        await productsAll.searchproduct("Top")
        await productsAll.searchp()

        //Verify 'SEARCHED PRODUCTS' is visible
        await expect (productsAll.searchMessage).toBeVisible()

        //Verify all the products related to search are visible
       await expect(productsAll.checkProductsContainWord('Top')).toBeTruthy()

    })
})