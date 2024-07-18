
'use client'
import {detilse} from "@/app/lib/defintion"
import { useParams } from 'next/navigation'
import Search from "@/app/ui/shop/search"

 
export default function Page () {
  const params = useParams<detilse>()
  console.log(params)
 
  return
      
}
