const { test, expect } = require('@playwright/test');
import { LoginPage } from '../pages/loginPage'
import { navbarPage } from '../pages/navbarPage';

test.describe("Test Case 5: Register User with existing email", () => {

    test("Register User with existing email", async ({ page }) => {

        //npx playwright test -g "TC5RegisterWithExistingEmail.spec" --ui

        let loginPage = new LoginPage(page)
        let navBarPage = new navbarPage(page)


        //open application
        await loginPage.openApp()

        //verify that home page is visible successfully
        await expect(page).toHaveURL(loginPage.getApplicationUrl())

        //click on Singup/Login link
        await navBarPage.chooseOption(navBarPage.linkSingupLogin)        

        //Verify 'New User Signup!' is visiblee
        await page.getByText("New User Signup! ").isVisible()

        //Enter name and already registered email address
        await loginPage.login("mirko@test1.com", "nekasifra")

        //Verify error 'Email Address already exist!' is visible

        await page.getByText("Email Address already exist! ").isVisible()

    })
})