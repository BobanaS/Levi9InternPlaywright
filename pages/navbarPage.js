import { BasePage } from "./basePage"

export class navbarPage extends BasePage{
    constructor(page){
        super(page)
        this.home = page.getByRole("link", { name: " Home" })
        this.product = page.getByRole("link", { name: " Products" })
        this.cart = page.getByRole("link", { name: " Cart" })
        this.apiTesting=  page.getByRole('link', { name: ' API Testing' }).nth(0)
        this.videoTutorials = page.getByRole("link", { name: "  Video Tutorials" })
        this.concactUs = page.getByRole("link", { name: " Contact us" })
        this.linkSingupLogin = page.getByRole("link", { name: " Signup / Login" })
        this.testCases=  page.getByRole('link', { name: 'Test Cases' }).nth(0)

    }
    async chooseOption(a){
        await a.click()
    }
}