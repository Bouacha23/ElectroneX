"use client"
import { Suspense } from "react"
import {skeletonProductList} from "@/app/ui/skeletons"

import ListProduct from "./listProduct"
import Search from "./search"

function Products() {
  return (
    <section id="products" className=" min-h-[400px] padd products bg-white">
        <div className="head pb-4 w-full  md:flex md:justify-between ">
            <h3 className="text-2xl capitalize">give all you need</h3>
            <Search/>
        </div>
      <Suspense fallback={<skeletonProductList/>}  >
        <ListProduct />
      </Suspense>
      
    </section>
  )
}

export default Products
