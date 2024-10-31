const { test, expect } = require('@playwright/test')
const { API3DeleteUser } = require('../../common/services/AP3DeleteUser')


test.describe("INGTestDeleteAccount.spec", () => {

    test("Verify delete Account ", async ({ }) => {
  
        let deleteUser= new API3DeleteUser()
        let userInformation = {
            email: "john.bibi@test.com",
            password: "mojasifra"
        }
        console.log(userInformation)
        let deleteAcc= await deleteUser.deleteAccount(userInformation)

        await expect(deleteAcc.responseCode).toEqual(200)
        await expect(deleteAcc.message).toEqual("Account deleted!")
    })
})



















////{"responseCode": 200, "message": "Account deleted!"}