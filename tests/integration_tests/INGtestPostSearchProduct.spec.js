const { test, expect } = require('@playwright/test')
const { API2PostMethodSearch } = require('../../common/services/API2PostMethodSearch')


test.describe("INGtestPostSearchProduct.spec", () => {

    test("Verify post SearchProduct ", async ({ }) => {
  
        let searchProducts= new API2PostMethodSearch()

        let searcProduct="Blue Top"
        let search = await searchProducts.postSearchproduct(searcProduct)
        
        console.log(search)
  
        await expect(search.products[0].name).toEqual(searcProduct)
        await expect(search.products[0].price).toEqual('Rs. 500')
  
    })
})