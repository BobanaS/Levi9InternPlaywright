const { test, expect } = require('@playwright/test');
import { LoginPage } from '../pages/loginPage'

test.describe("Test Case 2: Login User with correct email and password", () => {

    test("Login User with correct email and password", async ({ page }) => {

        //npx playwright test -g "TC2LoginUser.spec" --ui

        let loginPage = new LoginPage(page)

        //open application
        await loginPage.openApp()

        //verify that home page is visible successfully
        await expect(page).toHaveURL(loginPage.getApplicationUrl())

        //click on Singup/Login link
        await loginPage.linkSingupLogin.click()

        //Verify 'Login to your account' is visible
        await page.getByText("Login to your account").isVisible()

        //Enter correct email address and password and login
        await loginPage.login("mirko@test1.com", "nekasifra")

        //Verify that 'Logged in as username' is visible
        await page.getByText(" Logged in as mirko").isVisible()

        //logout 
        await loginPage.delete()
        //Verify that 'ACCOUNT DELETED!' is visible
        await page.getByText("Account Deleted!").isVisible()

    })
})