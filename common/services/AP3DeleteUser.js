import { Proxy } from "../proxy"

export class API3DeleteUser extends Proxy {
    constructor() {
        super()
        this.baseUrl = "https://www.automationexercise.com/api"
        this.deleteUrl = "/deleteAccount"


    }



    async deleteAccount(userInfo) {
        let url = this.baseUrl + this.deleteUrl
        let body = new FormData()
        body.append("email", userInfo.email)
        body.append("password", userInfo.password)


        let response = await this.delete(url, {}, body)

        return response
    }
}
