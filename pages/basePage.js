export class BasePage {

    /**
 * @param {import  ('@playwright/test').Page } page
 */
    constructor(page) {
        this.page = page
        this.APP_URL = "https://www.automationexercise.com/"
    }

    async openApp() {
        return this.page.goto(this.APP_URL)
    }

    getApplicationUrl() {
        return this.APP_URL
    }

   
}