import { BasePage } from "./basePage";

export class productsPage extends BasePage {
    constructor(page) {
        super(page)
        this.pageURL = "https://www.automationexercise.com/products"
        this.allProduct = page.getByText("All Products")
        this.viewFirstProduct = page.locator('a[href="/product_details/1"]')
        this.addtoCartFirst = page.locator('.productinfo .btn.add-to-cart[data-product-id="1"]')
        this.addtoCartSecond = page.locator('.productinfo .btn.add-to-cart[data-product-id="2"]')
        this.continueToShopingButton = page.getByText("Continue Shopping")
        this.viewCart= page.getByText("View Cart")
        this.searchButton = page.locator('#submit_search')
        this.searchInput = page.locator('#search_product')
        this.searchMessage = page.getByText("Searched Products")
        this.productsSearch = page.locator('.features_items')
        this.productLocator = this.productsSearch.locator('.col-sm-4')
        this.productsLocator = this.productLocator.locator('.productinfo.text-center')
    }
    async checkURL() {
        const currentURL = await this.page.url(); // Dobijamo trenutni URL
        return currentURL === this.pageURL;
    }
    async clickOnviewProduct() {
        this.viewFirstProduct.click();
    }
    async checkProductsContainWord(word) {
        const productCount = await this.productsLocator.count();
        for (let i = 0; i < this.productLocator.count(); i++) {
            // Pristupi <p> elementu unutar svakog proizvoda
            const productText = await this.productsLocator.nth(i).locator('p:has-text("Top")').textContent();
            // Provera sadrži li tekst reč `word`
            expect(productText.toLowerCase()).toContain(word.toLowerCase());
        }
    }


    async searchproduct(a) {
        let b = this.searchInput
        await b.fill(a); // 'a' je tekst koji se unosi u pretragu

    }
    async searchp() {
        await this.searchButton.click()
    }
    /*
     async clickOnSeriesProduct(selektor) {
    this.page.locator(`a[href="/product_details/${selektor}"]`).click();
  }

    metoda za dinamicki url, biranje proizvoda
    */

    async checkAllproduct() {
        return await this.allProduct.IsVisible()
    }
    async addtoCartF(){
            await this.addtoCartFirst.click();

        }   
    async addtoCartS(){
            await this.addtoCartSecond.click();

        }
        async continueShoping(){
            await this.continueToShopingButton.click();
        
        }   async viewCartt(){
            await this.viewCart.click();
        
        }   

    }

