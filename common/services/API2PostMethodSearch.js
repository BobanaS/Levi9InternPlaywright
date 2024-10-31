import { Proxy } from "../proxy"

export class API2PostMethodSearch extends Proxy{
    constructor(){
        super()
        this.baseUrl="https://www.automationexercise.com/api"
        this.searchProduct="/searchProduct"
        this.createAccount="/createAccount"


    }
    async postSearchproduct(searchItem){
        let url=this.baseUrl + this.searchProduct
        let body= new FormData()
        body.append("search_product", searchItem)


        let response= await this.post(url,{},body)
        return response
    }

// , birth_month, birth_year, firstname, lastname, company, address1, address2, country, zipcode, state, city, mobile_number
    async registerAccount(userInfo){
        let url=this.baseUrl + this.createAccount
        let body= new FormData()
        body.append("name",userInfo.name)
        body.append("email", userInfo.email)
        body.append("password", userInfo.password)
        body.append("title", userInfo.title)
        body.append("birth_date", userInfo.birth_date)
        body.append("birth_month", userInfo.birth_month) 
        body.append("birth_year", userInfo.birth_year)
        body.append("firstname", userInfo.firstname)
        body.append("lastname", userInfo.lastname)
        body.append("company", userInfo.company)
        body.append("address1", userInfo.address1)
        body.append("address2", userInfo.address2)
        body.append("country", userInfo.country)
        body.append("zipcode", userInfo.zipcode)
        body.append("state", userInfo.state)
        body.append("city", userInfo.city)
        body.append("mobile_number", userInfo.mobile_number)


        let response= await this.post(url,{},body)
        return response
    }
}