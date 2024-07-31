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

export async function  fetchproductWhiteCatergory(category : string):Promise<any> {
  try {
    const reponce  = await appApi.get(`/products?filters[category][$eq]=${category}`)
    return reponce
  } catch (error) {
    throw new Error (" product details  catergory service problem ")
  }
}


export async function postDataCart (Cart : object) {
  try {
    const response = await appApi.post('/carts',Cart);
    console.log('Response:', response.data);
    return response.data
  } catch (error) {
    console.error('Error posting data:', error);
  }
}
export async function fetchCart (email) {
  try {
    const response = await appApi.get(`/carts?populate[products][populate]=banner&filters[email][$eg]=${email}`);
    return response.data
  } catch (error) {
    console.error('Error fetch cart data:', error);
  }
}


export async function delateCart (id : string ) {
  try {
    const response = await appApi.delete(`/carts/${id}`);
    return response.data
  } catch (error) {
    console.error('Error Delete  cart data:', error);
  }
}


