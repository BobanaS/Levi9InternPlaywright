import { BasePage } from "./basePage";

export class LoginPage extends BasePage {
    constructor(page) {
        super(page)
        this.homeImage = page.locator('img[alt="Website for automation practice"]')
        this.inputLoginEmail = page.locator("#form > div > div > div.col-sm-4.col-sm-offset-1 > div > form > input[type=email]:nth-child(2)")
        this.inputPassword = page.locator("#form > div > div > div.col-sm-4.col-sm-offset-1 > div > form > input[type=password]:nth-child(3)")
        this.buttonLogin = page.getByRole("button", { "name": "Login" })
        this.linkLogout = page.getByRole("link", { name: " Logout" })
        this.linkDelete = page.getByRole("link", { name: " Delete Account" })
        this.inputNameForSignup = page.getByPlaceholder("Name")
        this.inputEmalForSignup = page.locator("#form > div > div > div:nth-child(3) > div > form > input[type=email]:nth-child(3)")
        this.buttonSignup = page.getByRole("button", { "name": "Signup" })
        this.subsEmail=page.locator('#susbscribe_email')
        this.subsButton=page.locator('#subscribe')
        this.subsMess=page.getByText('Subscription')
        this.subsSuccMess=page.getByText('You have been successfully subscribed!')
    }

    async login(username, password) {
        await this.inputLoginEmail.fill(username)

        await this.inputPassword.fill(password)

        await this.buttonLogin.click()
    }

    async logout() {
        await this.linkLogout.click()
    }
    async delete() {
        await this.linkDelete.click()
    }

    async signup(name, email) {

        await this.inputNameForSignup.fill(name)

        await this.inputEmalForSignup.fill(email)

        await this.buttonSignup.click()
    }

    async enterUserSignupData(userData) {

        await this.page.getByText("Enter Account Information").isVisible()

        //fill details: Title, Name, Email, Password, Date of birth
        await this.page.getByLabel(userData.gender).check()

        await this.page.getByLabel("Password ").fill(userData.password)

        await this.page.selectOption('select[id="days"]', userData.dayOfBirth)
        await this.page.selectOption('select[id="months"]', userData.monthOfBirth)
        await this.page.selectOption('select[id="years"]', userData.yearOfBirth)

        //select checkbox 'Sign up for our newsletter!'
        await this.page.getByText("Sign up for our newsletter!").click()

        //select checkbox 'Receive special offers from our partners!'
        await this.page.getByText("Receive special offers from our partners!").click()

        //fill other data
        await this.page.locator('input[id="first_name"]').fill(userData.first_name)

        await this.page.locator('input[id="last_name"]').fill(userData.last_name)

        await this.page.locator('input[id="company"]').fill(userData.company)

        await this.page.locator('input[id="address1"]').fill(userData.address1)

        await this.page.locator('input[id="address2"]').fill(userData.address2)

        await this.page.selectOption('select[id="country"]', userData.country)

        await this.page.locator('input[id="state"]').fill(userData.state)

        await this.page.locator('input[id="city"]').fill(userData.city)

        await this.page.locator('input[id="zipcode"]').fill(userData.zipcode)

        await this.page.locator('input[id="mobile_number"]').fill(userData.mobile_number)

    }

    async scrool(){
        await this.page.getByText('Subscription').scrollIntoViewIfNeeded();
    }
    async fillsubEmail(a){
        await this.subsEmail.fill(a)
    }
    async clickSubsButton(){
        await this.subsButton.click()
    }
}