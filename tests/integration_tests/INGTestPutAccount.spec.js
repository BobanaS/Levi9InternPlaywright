const { test, expect } = require('@playwright/test')
const { API4PutMethod } = require('../../common/services/API4PutMethod')


test.describe("INGtestPostSearchProduct.spec", () => {

    test("Verify post SearchProduct ", async ({ }) => {
  
        let updateUser= new API4PutMethod()

        let userInformation = {
            name: "John Bibi",
            email: "john.bibi@test.com",
            password: "mojasifra",
            title: "Mr.",
            birth_date: "15",
            birth_month: "10",
            birth_year: "1990",
            firstname: "John",
            lastname: "Bibicici",
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

        let updatedUser= await updateUser.putUserInfo(userInformation)
        console.log(updatedUser)

        await expect(updatedUser.responseCode).toEqual(200)
        await expect(updatedUser.message).toEqual("User updated!")

    })
})
