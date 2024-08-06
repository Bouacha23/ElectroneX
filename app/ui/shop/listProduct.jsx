
import  Button from "@/app/ui/button"
import { FaStar } from "react-icons/fa"
import Link from "next/link"
import {details} from "@/app/lib/defintion"
import Image from "next/image"
import {postDataCart} from "@/app/lib/data"
import { useUser } from "@clerk/nextjs"
import { useContext } from "react"
import {ElectronContext} from "@/app/(Context)/context"
import { useRouter } from "next/navigation"


 function ListProduct ({productList}) {
  const {cart , setCart , setNotDetails } = useContext(ElectronContext)
  const redirct = useRouter()
  const {user} = useUser()
  
  // function section 
  const handelPostData =  async (product)=>{
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
   handelNotifcation()
   
 }

 const handelNotifcation = ()=> {
     setNotDetails(true)
     setTimeout(()=> {setNotDetails(false)} , 2000)
 }

  return (
    <div className=" col-span-3 pt-8 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5  px-8 gap-8 sm:px-0 sm:gap-4  "> 
        {
          productList.map((item) => 
            <article className=" relative rounded-lg border border-2 border-white hover:border-gray-500" key={item.id}>
              <Link href={`/products/${item.id}`} className="w-full ">
              <Image src={item?.attributes.banner.data.attributes.url} className="h-[200px] w-full sm:h-[240px]  bg-gray-200 rounded-lg w-full" width={250} height={250} alt="product img"  />
              </Link>
              <div className="info grid grid-cols-2 gap-2 p-2">
                 <h3 className="col-span-2 min-h-12">{item.attributes.title}</h3>
                 <span className="hidden md:block"><FaStar size={12} color="#FFFF00" /> <span className="text-gray-500 text-[12px]">{item.attributes.riting } </span> </span>
                 <span>{`$ ${item.attributes.prix}`}</span>
                <div className="grid grid-cols-1  w-full col-span-2 gap-2 ">
                <Button  onClick={()=> handelPostData(item)} lable="Add to Chart" style="h-[45px] hover:bg-gray-100  sm:text-[13px] border-[1px] border-gray-400  hover:border-black " />
                <Button onClick={()=> {
                  handelPostData(item);
                  redirct.push("/checkout")
                }} lable="Buy Now " style=" h-[45px]   text-[13px] bg-black text-white hover:text-black hover:bg-white hover:border-[1px]  hover:border-black  " />
                </div>
              </div>
              <span className=" absolute top-4 right-4 bg-white rounded-full text-sm  border-[1px] border-primary px-2 py-[5px]">{item.attributes.category}</span>
              
            </article>
           )
        }
    </div>
  )
}

export default ListProduct
