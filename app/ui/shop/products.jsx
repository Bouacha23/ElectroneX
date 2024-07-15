"use client"
import { Suspense } from "react"
import {skeletonProductList} from "@/app/ui/skeletons"

import ListProduct from "./listProduct"
import Search from "./search"

function Products() {
  return (
    <section id="products" className=" rounded-xl  min-h-[400px] padd  bg-white">
        <div className="head pt-4 pb-8 w-full  md:flex md:justify-between ">
            <h3 className="text-2xl capitalize">give all you need</h3>
            <Search/>
        </div>
        <div className="grid lg:grid-cols-4 gap-4">
          <div className=" col-span-1">this</div>
        <Suspense fallback={<skeletonProductList/>}  >
          <ListProduct  />
        </Suspense>
        </div>
      
    </section>
  )
}

export default Products
