const { test, expect } = require('@playwright/test');
import {LoginPage} from '../pages/loginPage'

test.describe("Test Case 3: Login User with incorrect email and password", () => {

    test(" Login User with incorrect email and password", async ({page}) => {

        //npx playwright test -g "TC3LoginUserIcorrectMailAndPassword.spec" --ui

        let loginPage = new LoginPage(page)

        //open application
        await loginPage.openApp()

        //verify that home page is visible successfully
        await expect(page).toHaveURL(loginPage.getApplicationUrl())

        //click on Singup/Login link
        await loginPage.linkSingupLogin.click()
        
        //Verify 'Login to your account' is visible
        await page.getByText("Login to your account").isVisible()
        
        // Enter incorrect email address and password
        await loginPage.login("peraMikic@tes.com", "Miki")

        //Verify that 'Logged in as username' is visible
        await page.getByText("Your email or password is incorrect!").isVisible()

    })
})