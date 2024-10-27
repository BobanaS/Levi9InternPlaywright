const { test, expect } = require('@playwright/test');
import { LoginPage } from '../pages/loginPage';
import { testCasesPage } from '../pages/testCasesPage';

/*
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click on 'Test Cases' button
5. Verify user is navigated to test cases page successfully
*/
test.describe("Test Case 7: Verify Test Cases Page", () => {

    test("Verify Test Cases Page", async ({ page }) => {

        //npx playwright test -g "TC7TestCases.spec" --ui

        let loginPage = new LoginPage(page)
        let testCasePage1 = new testCasesPage(page); // Instantiate ContactUsPage

        //open application
        await loginPage.openApp()

        //verify that home page is visible successfully
        await expect(page).toHaveURL(loginPage.getApplicationUrl())
        await expect(loginPage.homeImage).toBeVisible()
        

        // Click on 'Test Cases' button

        await loginPage.testCases.click()

        //Verify user is navigated to test cases page successfully
        await expect(testCasePage1.titleT).toBeVisible()
        await expect(testCasePage1.titleRedMessage).toBeVisible()
        await expect(testCasePage1.testCase).toBeVisible()
    })
})