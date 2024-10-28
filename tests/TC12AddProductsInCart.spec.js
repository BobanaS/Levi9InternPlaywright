const { test, expect } = require('@playwright/test')
import { LoginPage } from '../pages/loginPage'



test.describe("Test Case 12: Add Products in Cart", () => {

    test("Add Products in Cart", async ({page }) => {

        //npx playwright test -g "TC12AddProductsInCart.spec" --ui
        let loginPage=new LoginPage(page)
        //open application
        await loginPage.openApp()

        //verify that home page is visible successfully
        await expect(page).toHaveURL(loginPage.getApplicationUrl())

    })
})