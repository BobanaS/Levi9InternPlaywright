const { test, expect } = require('@playwright/test')
const { API2PostMethodSearch } = require('../../common/services/API2PostMethodSearch')


test.describe("INGtestPostSearchProduct.spec", () => {

    test("Verify post SearchProduct ", async ({ }) => {
  
        let createUser= new API2PostMethodSearch()
        let userInformation = {
            name: "John Bibi",
            email: "john.bibi@test.com",
            password: "mojasifra",
            title: "Mr.",
            birth_date: "15",
            birth_month: "10",
            birth_year: "1990",
            firstname: "John",
            lastname: "Bibi",
            company: "Example Corp",
            address1: "123 Main St",
            address2: "Apt 4B",
            country: "USA",
            zipcode: "10001",
            state: "NY",
            city: "New York",
            mobile_number: "+1234567890"
        }
        console.log(userInformation)

        let newUser= await createUser.registerAccount(userInformation)
        console.log(newUser)

        await expect(newUser.responseCode).toEqual(201)
        await expect(newUser.message).toEqual("User created!")

    })
})
