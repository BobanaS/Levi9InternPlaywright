const { test, expect } = require('@playwright/test');
import { contactUsPage } from '../pages/contactUsPage';
import { LoginPage } from '../pages/loginPage'

test.describe("Test Case 6: Contact Us Form", () => {

    test("Contact Us Form", async ({ page }) => {

        //npx playwright test -g "TC6ContacyUSForm.spec" --ui

        let loginPage = new LoginPage(page)
        let contactUsPageInstance = new contactUsPage(page); // Instantiate ContactUsPage

        //open application
        await loginPage.openApp()

        //verify that home page is visible successfully
        await expect(page).toHaveURL(loginPage.getApplicationUrl())

        //click on Singup/Login link
        await loginPage.contactUs.click()

        //Verify 'GET IN TOUCH' is visiblee
        await expect(page.getByText("Get In Touch")).toBeVisible()

        //Enter name and already registered email address
        await contactUsPageInstance.contactus("mirkic", "mirkic@ljl.com", "naziv", "poruka")

        //Click OK button
        await expect(contactUsPageInstance.submitButton).toBeVisible({ timeout: 10000 })
        //await contactUsPageInstance.acceptAlert()


        //Verify success message 'Success! Your details have been submitted successfully.' is visible   
        await expect(contactUsPageInstance.messageS.getByText('Success! Your details have')).toBeVisible()

        // Povratak na početnu stranu
        await contactUsPageInstance.clickOnHomeButton();
        await contactUsPageInstance.waitForTimeout(10000);
/*
        //Click 'Home' button and verify that landed to home page successfully
        await expect(contactUsPageInstance.homeButton).toBeVisible();

        // Proveri da li ima tačan href atribut
        await expect(contactUsPageInstance.homeButton).toHaveAttribute('href', '/')

        // Proveri da li sadrži tekst 'Home'
        await expect(contactUsPageInstance.homeButton).toHaveText('Home')
        await contactUsPageInstance.clickHomeButton()
*/    })
})
