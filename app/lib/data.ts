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


export async function  fetchBrodcutDetails(id : string):Promise<any> {
  try {
    const reponce  = await appApi.get(`/products/${id}?populate=*`)
    return reponce.data
  } catch (error) {
    throw new Error (" product details  list Error ")
  }
}

