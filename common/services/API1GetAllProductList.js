import { Proxy } from "../proxy";

export class Api1getAllProductList extends Proxy{

    constructor(){
        super()
        this.baseUrl="https://www.automationexercise.com/api"
        this.productList="/productsList"
        this.userDetailUrl="/getUserDetailByEmail"
        this.userEmail="?email="

    }

   async getAllproducts(){
        let url=this.baseUrl + this.productList
        let response= await this.get(url, {})
        return response
    }

    async getUserDetailbyEmail(userInfo){
        let url =this.baseUrl + this.userDetailUrl + this.userEmail + userInfo

        let response= await this.get(url,{})
        return response
    }


    }

     


