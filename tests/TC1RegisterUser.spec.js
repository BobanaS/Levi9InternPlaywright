const { test, expect } = require('@playwright/test');
test.describe("Register User", () => {

    //1. Launch browser
    //2. Navigate to url 'http://automationexercise.com'
    //3. Verify that home page is visible successfully
    //4. Click on 'Signup / Login' button
    //5. Verify 'New User Signup!' is visible
    /*6. Enter name and email address
    7. Click 'Signup' button
    8. Verify that 'ENTER ACCOUNT INFORMATION' is visible
    9. Fill details: Title, Name, Email, Password, Date of birth
    10. Select checkbox 'Sign up for our newsletter!'
    11. Select checkbox 'Receive special offers from our partners!'
    12. Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
    13. Click 'Create Account button'
    14. Verify that 'ACCOUNT CREATED!' is visible
    15. Click 'Continue' button
    16. Verify that 'Logged in as username' is visible
    17. Click 'Delete Account' button
    18. Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button*/

    test("Verify that home page is visible successfully", async ({ page }) => {
        await page.goto("https://www.automationexercise.com/")
        await expect(page.locator('img[src="/static/images/home/logo.png"]')).toBeVisible()
        await expect(page).toHaveURL("https://www.automationexercise.com/")
        await page.goto("https://www.automationexercise.com/")
        await page.getByText(" Signup / Login").click()
        await expect(page.getByText("New User Signup!")).toBeVisible()
        await page.locator("[type='text']").click()
        await page.fill("[type='text']", "Mario")
        await page.locator("[data-qa='signup-email']").click()
        await page.fill("[data-qa='signup-email']", "Mario@tes.com")
        await page.getByRole('button', { name: "Signup" }).click()
        await expect(page.getByText("Enter Account Information")).toBeVisible()
        await page.locator('[id="id_gender2"]').click()
        await page.fill('input[type="password"]', 'tvojaLozinka')
        await page.selectOption('#days', '15')
        await page.selectOption('#months', 'January')
        await page.selectOption('#years', '2000')
        await page.fill("#first_name", "Mario")
        await page.fill("#last_name", "Marica")
        await page.fill("#company", "Mario world")
        await page.fill("#address1", "Marios address")
        await page.fill("#address2", "Street May")
        await page.selectOption("#country", "Australia")
        await page.fill("#state", "State Aus")
        await page.fill("#city", "Canvera")
        await page.fill("#zipcode", "1123123")
        await page.fill("#mobile_number", "1234567")
        await page.locator('[data-qa="create-account"]').click()
        await expect(page.getByText("ACCOUNT CREATED!")).toBeVisible()
        await page.getByRole('link', { name: 'Continue' }).click()
        await expect (page.getByText(' Logged in as Mario')).toBeVisible()
        await page.getByText(" Delete Account").click()
        await expect(page.getByText("Account Deleted!")).toBeVisible()
        await page.locator('[data-qa="continue-button"]').click();


    })
})