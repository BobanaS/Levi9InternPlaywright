const { test, expect } = require('@playwright/test');
test.describe("Product cart testing", () => {
    test("Adding product cart", async ({ page }) => {
        await page.goto("https://www.automationexercise.com/")
       /* await page.locator('input[id="Women"]').click()
        await page.getByText("Sumbit").click()
        await page.getByRole('button', {name:"Login"}).click()
        */
        await expect(page).toHaveURL("https://www.automationexercise.com/")
    })
    test("Remove product cart", async ({ page }) => {

    })
})