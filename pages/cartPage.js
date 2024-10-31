import { BasePage } from "./basePage";

export class cartPage extends BasePage{
    constructor(page){
        super(page)
        this.checkoutButton=page.getByText("Proceed To Checkout")
        this.cartInfo=page.locator("#cart_info")
        this.product1=page.locator("#product-1")
        this.product2=page.locator("#product-2")
        this.reglog=page.getByRole("link",{name:"Register / Login"});
       
        this.continueOnCart=page.getByRole("button", {name:"Continue On Cart"})
    }
    
    async productInfo(a){
        this.price=a.locator(".cart_price")
        this.quantity=a.locator(".cart_quantity")
        this.total=a.locator(".cart_total")

    }
    async checkQuantity(a){
        let b=false;
        const isDisabled = await this.page.locator('.cart_quantity').locator(".disabled").isVisible();
        let c=await this.page.locator('.cart_quantity').locator(".disabled").innerText()
        if (c===a.toString()){
            b=true
        }
        return b

    }
    async clickCheckOut(){
        this.checkoutButton.click()
    }
    async clickRegister(){
        this.reglog.click()
    }

}