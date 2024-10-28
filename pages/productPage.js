import { BasePage } from "./basePage";

export class productPage extends BasePage {
    constructor(page) {
        super(page)
        this.productInformation = page.locator('div.product-information')
        this.productName = this.productInformation.locator('h2')
        this.category = this.productInformation.locator('p:has-text("Category:")')
        this.price = this.productInformation.locator('span > span')
        this.availability = this.productInformation.locator('p:has-text("Availability:")')
        this.condition = this.productInformation.locator('p:has-text("Condition:")')
        this.brand = this.productInformation.locator('p:has-text("Brand:")')
        this.productURL = "https://www.automationexercise.com/product_details/1"
    }

    async checkURL() {
        const currentURL = await this.page.url(); // Dobijamo trenutni URL
        return currentURL === this.pageURL;
    }
    async productBlueTopdetails() {
        let nameVisible = this.productName.textContent.trim === "Blue Top"; // bez await i ()
        let categoryVisible = this.category.textContent.trim === "Category: Women > Tops"; // bez await i ()
        let priceVisible = this.price.textContent.trim === "Rs. 500"; // bez await i ()
        let availabilityVisible = this.availability.textContent.trim === "In Stock"; // bez await i ()
        let conditionVisible = this.condition.textContent.trim === "New"; // bez await i ()
        let brandVisible = this.brand.textContent.trim === "Polo"; // bez await i ()
        let b = true;
        if (nameVisible && categoryVisible && priceVisible && availabilityVisible && conditionVisible && brandVisible) {
            b
        } else {
            b = false;
        }
        return b;

    }

}