'use client'

import Search from "../ui/shop/search"
import DetailProduct from "@/app/ui/details/detailsproduct"
import { useEffect, useState } from "react"
import {fetchBrodcutDetails} from "@/app/lib/data"
function page() {

  const [Details , setDetails] = useState({});

  const listdeatils = async ()=> {
    const reponce = await fetchBrodcutDetails('1')
    setDetails(reponce?.data)
    console.log(reponce.data)
}

  useEffect(
    ()=> {
      listdeatils()
    }
    , [])

  return (
    <div className="bg-white pt-[70px] w-full min-h-[300px] z-40">
           <div className="head pt-4 pb-8 w-full  md:flex md:justify-between ">
            <h3 className="text-2xl capitalize">give all you need</h3>
            <Search   />
            </div>
            <div className="path">
              Shop / Musix  <span> / </span>
            </div>
            <DetailProduct  product = {Details }/>
      </div>
  )
}

export default page
