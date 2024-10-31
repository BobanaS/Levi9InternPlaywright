const { test, expect } = require('@playwright/test')
const { Api1getAllProductList } = require('../../common/services/API1GetAllProductList')


test.describe("API test get user detail by email",()=>{
    test("Verify user details are in response", async ({})=> {

        let getUser= new Api1getAllProductList()

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

        let userById= await getUser.getUserDetailbyEmail(userInformation.email)
        console.log(userById)

        await expect(userById.responseCode).toEqual(200)
    })
})