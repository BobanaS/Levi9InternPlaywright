import { BasePage } from "./basePage";

export class checkOutPage extends BasePage {
    constructor(page) {
        super(page)
        this.placeOrderbutton = page.getByRole("button", { name: "Place Order" })
        this.deliveryAddressTitle = page.locator('ul#address_delivery .address_title h3.page-subheading');
        this.fullName = page.locator('ul#address_delivery .address_firstname.address_lastname');
        this.addressLine1 = page.locator('ul#address_delivery .address_address1.address_address2:nth-of-type(1)');
        this.addressLine2 = page.locator('ul#address_delivery .address_address1.address_address2:nth-of-type(2)');
        this.streetName = page.locator('ul#address_delivery .address_address1.address_address2:nth-of-type(3)');
        this.cityStatePostcode = page.locator('ul#address_delivery .address_city.address_state_name.address_postcode');
        this.countryName = page.locator('ul#address_delivery .address_country_name');
        this.phoneNumber = page.locator('ul#address_delivery .address_phone');
        this.productName=page.getByText("Blue Top")
        this.description=page.locator('.form-control')
    }

    async writeMessage(a){
        await this.description.fill(a)

    }
    async placecheck(){
        await this.page.click('a[href="/payment"].check_out');
    }
}