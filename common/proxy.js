export class Proxy{
    constructor(){

    }

//Get request
/**
 * 
 * @param {string} url 
 * @param {*} params 
 * @param {*} body 
 * @param {*} auth 
 */


async get(url = null, auth = {}){
    const headers = {
        'Authorization': auth
    }

    const response= await fetch(url, { method: 'GET', headers });
    const res=await response.json();
    return res;
}

/**
 * 
 * @param {*} url 
 * @param {*} auth 
 * @param {*} body 
 * @returns 
 */
async post(url= null, auth={}, requestBody={}){
    const headers = {
        'Authorization': auth
    }
    const response= await fetch(url, { method: 'POST', headers:headers, body:requestBody });
    const res=await response.json();
    return res;
}

/**
 * 
 * @param {*} url 
 * @param {*} auth 
 * @param {*} requestBody 
 * @returns 
 */
async delete(url= null, auth={}, requestBody={}){
    const headers = {
        'Authorization': auth
    }

    const response= await fetch(url, { method: 'DELETE', headers:headers, body:requestBody });
    const res=await response.json();
    return res;
}

/**
 * 
 * @param {*} url 
 * @param {*} auth 
 * @param {*} requestBody 
 * @returns 
 */

async put(url= null, auth={}, requestBody={}){
    const headers = {
        'Authorization': auth
    }

    const response= await fetch(url, { method: 'PUT', headers:headers, body:requestBody });
    const res=await response.json();
    return res;
}
}