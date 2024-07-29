'use client '
import {details} from "@/app/lib/defintion"
import Button from "../button"
import Image from "next/image"
import {postDataCart} from "@/app/lib/data"
import { useUser } from "@clerk/nextjs"
import { useContext } from "react"
import {ElectronContext} from "@/app/(Context)/context"
import { useRouter } from "next/navigation"

function DetailProduct ({product}:{product: details}) {
  const {cart , setCart } = useContext(ElectronContext)
  const redirct = useRouter()
  const {user} = useUser()
  const handelPostData =  async ()=>{
     if(!user) {
      redirct.push("/sign-in")
     }
     const data = {
      data : {
        username : user?.fullName ,
        email : user?.primaryEmailAddress?.emailAddress ,
        products : [ product?.id ]
      }
    }
    const reponce  = await postDataCart(data)
    setCart([...cart ,
      {
        id : reponce.data.id ,
        product
      }
    ])
    
  }
  
  

  return (
     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 ">
      <Image className=" bg-gray-400  rounded-xl   "  src={product?.attributes?.banner?.data?.attributes?.formats?.url} width={300} height={300} alt="producti img" />
      <div className="">
                 <h3 className="col-span-2">{product?.attributes?.title}</h3>
                 <span>{`$ ${product?.attributes?.prix}`}</span>
                <Button onClick={()=> handelPostData()} lable="Add to Chart" style=" text-[13px] border-[1px] border-gray-400  hover:border-black " />
                <Button lable="Buy Now " style=" text-[13px] bg-black text-white hover:text-black hover:bg-white hover:border-[1px]  hover:border-black  " />
              </div>
     </div>
  )
}

export default DetailProduct
