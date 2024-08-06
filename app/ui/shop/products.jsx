"use client"
import { Suspense } from "react"
import {skeletonProductList} from "@/app/ui/skeletons"
import { fetchProdcutList } from "@/app/lib/data"
import { useState ,useEffect} from "react"
import ListProduct from "./listProduct"
import Search from "./search"

function Products() {
  const [productList , setProductList] = useState([])
  useEffect( ()=>{
    const listData = async ()=> {
          const reponce = await fetchProdcutList()
          setProductList(reponce?.data)
          console.log(reponce.data)
    }
    listData()
  },[])
  
 
  
  return (
    <section id="products" className=" p-2 md:p-0 rounded-xl  min-h-[400px] padd  bg-white">
        <div className="head pt-4 pb-8 w-full  md:flex md:justify-between ">
            <h3 className="text-3xl font-bold capitalize">give all you need</h3>
            <Search/>
        </div>
        
        <Suspense fallback={<skeletonProductList/>}  >
          <ListProduct productList={productList} />
        </Suspense>

      
    </section>
  )
}

export default Products
