'use client'

import { useParams } from 'next/navigation'
import Search from "@/app/ui/shop/search"
import {details} from "@/app/lib/defintion"
import DetailProduct from "@/app/ui/details/detailsproduct"
import { useContext, useEffect, useState } from "react"
import {fetchBrodcutDetails} from "@/app/lib/data"
import Recomandation from "@/app/ui/recomandation"
import {fetchproductWhiteCatergory} from "@/app/lib/data"
import  CartNotfication  from "@/app/ui/notifcation"
import { ElectronContext } from '@/app/(Context)/context'
 
export default function Page () {
  // constant section 
  const {notDetails } = useContext(ElectronContext)
  const params = useParams()
  const [Details , setDetails] = useState<details | undefined>();
  const [categoryList , setCategory] = useState< object[]>([])
  // function section 
  const listdeatils = async ()=> {
    const reponce = await fetchBrodcutDetails(params?.id)
    setDetails(reponce.data) 
    return reponce.data
}
  const proudctWithCategory = async (categoryObject : details)=> {
    const catergoryName = categoryObject?.attributes.category
    const repoce =  await fetchproductWhiteCatergory(catergoryName )
    setCategory(repoce.data.data)
  }

 //  loding details form server
  useEffect(
    ()=> {
      const detailProduct = async ()=> {
        const reponce = await listdeatils()
        if(reponce) {
          proudctWithCategory(reponce)
        }
      }
      detailProduct()
    }
    , [])
    
 
  return(
    <div className="bg-white pt-[70px] w-full min-h-[300px] z-40">
    <div className="head pt-4 pb-8 w-full  md:flex md:justify-between ">
     <h3 className="text-2xl capitalize">give all you need</h3>
     <Search   />
     </div>
     <div className="path">
       {`Home / ${Details?.attributes.category}`} <span> {`/ ${Details?.attributes?.title}`} </span>
     </div>
     <DetailProduct  product = {Details }/>
     <Recomandation label="Explore our recomendations" list={categoryList}/>
     {notDetails ? < CartNotfication label= " one product add to cart " /> : null }
</div>
    )
}


