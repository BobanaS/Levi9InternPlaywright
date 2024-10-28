const { test, expect } = require('@playwright/test')
import { LoginPage } from '../pages/loginPage'



test.describe("Test Case 10: Verify Subscription in home page", () => {

    test("Verify Subscription in home page", async ({page }) => {

        //npx playwright test -g "TC10VerifySubscriptonHomePage.spec" --ui
        let loginPage=new LoginPage(page)
        //open application
        await loginPage.openApp()

        //verify that home page is visible successfully
        await expect(page).toHaveURL(loginPage.getApplicationUrl())

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