const { test, expect } = require('@playwright/test');
import { contactUsPage } from '../pages/contactUsPage';
import { LoginPage } from '../pages/loginPage'
import { navbarPage } from '../pages/navbarPage';

test.describe("Test Case 6: Contact Us Form", () => {

    test("Contact Us Form", async ({ page }) => {

        //npx playwright test -g "TC6ContacyUSForm.spec" --ui

        let loginPage = new LoginPage(page)
        let contactUsPageInstance = new contactUsPage(page); // Instantiate ContactUsPage
        let nabBarPage = new navbarPage(page)

        //open application
        await loginPage.openApp()

        //verify that home page is visible successfully
        await expect(page).toHaveURL(loginPage.getApplicationUrl())

        //click on Singup/Login link
        await nabBarPage.chooseOption(nabBarPage.concactUs)
        //Verify 'GET IN TOUCH' is visiblee
        await expect(page.getByText("Get In Touch")).toBeVisible()

        //Enter name and already registered email address
        await contactUsPageInstance.contactus("mirkic", "mirkic@ljl.com", "naziv", "poruka")

        //Click OK button
       // await expect(contactUsPageInstance.submitButton).toBeVisible({ timeout: 10000 })
        //await contactUsPageInstance.acceptAlert()


        //Verify success message 'Success! Your details have been submitted successfully.' is visible   
        await expect(contactUsPageInstance.messageS.getByText('Success! Your details have')).toBeVisible()

        // Povratak na početnu stranu
        await contactUsPageInstance.clickOnHomeButton;
        // Proveri da li sadrži tekst 'Home'
        await expect(contactUsPageInstance.homeButton).toHaveText('Home')
        await contactUsPageInstance.clickHomeButton()
 })
})
