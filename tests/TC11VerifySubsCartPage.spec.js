const { test, expect } = require('@playwright/test')
import { LoginPage } from '../pages/loginPage'
import{navbarPage} from '../pages/navbarPage'


test.describe("Test Case 11: Verify Subscription in Cart page", () => {

    test("Verify Subscription in Cart page", async ({page }) => {

        //npx playwright test -g "TC11VerifySubsCartPage.spec" --ui
        let loginPage=new LoginPage(page)
        let navBarPage=new navbarPage(page)
        //open application
        await loginPage.openApp()

        //verify that home page is visible successfully
        await expect(page).toHaveURL(loginPage.getApplicationUrl())
        await navBarPage.chooseOption(navBarPage.cart)
        // Scroll down to footer

        await loginPage.scrool()
        // Verify text 'SUBSCRIPTION'

        await expect (loginPage.subsMess).toBeVisible
         //Enter email address in input and click arrow button
        await loginPage.fillsubEmail("bibi@testic.com")
        await loginPage.clickSubsButton()
        // Verify success message 'You have been successfully subscribed!' is visible

        await expect(loginPage.subsSuccMess).toBeVisible()
        
    })
})