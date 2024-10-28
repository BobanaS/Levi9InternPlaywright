import { BasePage } from "./basePage";

export class contactUsPage extends BasePage {
    constructor(page) {
        super(page)
        this.concactUs = page.getByRole("link", { name: " Contact us" })
        this.home = page.getByRole("link", { name: " Home" })
        this.name = page.locator('[data-qa="name"]')
        this.email = page.locator('[data-qa="email"]')
        this.subject = page.locator('[data-qa="subject"]')
        this.message = page.locator('[data-qa="message"]')
        this.submitButton = page.locator('[data-qa="submit-button"]')
        this.contactURL = "https://www.automationexercise.com/contact_us"
        this.messageS = page.locator('#contact-page')
        this.homeButton = page.locator('a.btn.btn-success', { hasText: 'Home' })


    }
    async contactus(username, emaili, sub, message) {
        await this.name.fill(username)

        await this.email.fill(emaili)

        await this.subject.fill(sub)

        await this.message.fill(message)

        await this.page.on('dialog', async dialog => {
            dialog.accept();
        })
        // Klikni na dugme za slanje
        await this.submitButton.click()


    }

    /* async acceptAlert() {
         // Čekaj na dijalog da se prikaže
         await this.page.keyboard.press('Enter');
         await this.page.keyboard.press('Enter');
 */


    async clickHomeButton() {

    await this.homeButton.click()
}
}