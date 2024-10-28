const { test, expect } = require('@playwright/test');
import { LoginPage } from '../pages/loginPage'
import { navbarPage } from '../pages/navbarPage';

test.describe("Test Case 4: Logout User", () => {

    test("Logout User", async ({ page }) => {

        //npx playwright test -g "TC4LogoutUser.spec" --ui

        let loginPage = new LoginPage(page)
        let navBarPage = new navbarPage(page)
        //open application
        await loginPage.openApp()

        //verify that home page is visible successfully
        await expect(page).toHaveURL(loginPage.getApplicationUrl())

        //click on Singup/Login link
        await navBarPage.chooseOption(navBarPage.linkSingupLogin)

        //Verify 'Login to your account' is visible
        await page.getByText("Login to your account").isVisible()

        //Enter correct email address and password and login
        await loginPage.login("ana1@ana.com", "ana+007")

        //Verify that 'Logged in as username' is visible
        await page.getByText(" Logged in as ana").isVisible()

        //logout 
        await loginPage.logout()

    })
})