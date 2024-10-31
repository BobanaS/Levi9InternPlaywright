const { test, expect } = require('@playwright/test')
const { Api1getAllProductList } = require('../../common/services/API1GetAllProductList')
const Ajv = require('ajv');

test.describe("INGtest Get method", () => {

    test("Test get method", async ({ }) => {
        const ajv = new Ajv();

        let getAllProducts = new Api1getAllProductList()

        let products = await getAllProducts.getAllproducts()
        //console.log(products) - stampa ti sve proizvode

        await expect(products.products[0].name).toEqual('Blue Top')

        await expect(products.products[2].price).toEqual('Rs. 1000')

        for (let i = 0; i < products.products.length; i++) {
            let pricePart = products.products[i].price.split(' ')
            let priceNumber = parseInt(pricePart[1]);

            let newPrice = priceNumber * 1.2;

            products.products[i].price = ('RS. ' + newPrice)
        }
        console.log(products)
        await expect(products.products.length).toEqual(parseInt(34))

    
        
        let validate = ajv.compile(shemaproducts);
        let valid = validate(products);

        // Proveri da li je JSON validan prema šemi
        if (valid) {
            console.log("Validacija uspešna!");
        } else {
            console.error("Validacija nije uspela:", validate.errors);
        }

    })
})