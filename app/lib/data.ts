import {appApi} from "./api"


export async function fetchProdcutList():Promise<any>{
    try {
        const responce = await appApi.get("/products?populate=*")
        return responce.data
        
    } catch (error){
        console.log('from productList fn : ' , error)
        throw new Error (" product list Error ")
    }
}
