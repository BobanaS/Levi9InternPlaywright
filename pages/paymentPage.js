import { BasePage } from "./basePage";

export class paymentPage extends BasePage{
    constructor(page){
        super(page)
        this.nameOnCardInput=page.locator('input[name="name_on_card"]')
        this.cardNumber=page.locator('input[name="cvc"]')
        this.cvcInput=page.locator('input[name="cvc"]')
        this.mmInput=page.locator('input[name="expiry_month"]')
        this.yInput= page.locator('input[name="expiry_year"]')
        this.payAndCOnfirmOrderbutton=page.getByRole("button",{name:"Pay and Confirm Order"})
        this.message=page.getByText("Congratulations! Your order has been confirmed!")
    }

    async fillCardInfo(){
       await this.nameOnCardInput.fill("mihfaf")
       await this.page.fill('input[name="card_number"][data-qa="card-number"]', '1234 5678 9012 3456');
       await this.cvcInput.fill("134")
       await this.mmInput.fill("11")
       await this.yInput.fill("2000")
       await this.page.click('button#submit[data-qa="pay-button"]')

    }

    async clickonPayButton(){
      await   this.page.click('button#submit[data-qa="pay-button"]')

    }
}
