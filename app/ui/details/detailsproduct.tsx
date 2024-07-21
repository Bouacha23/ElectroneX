import {details} from "@/app/lib/defintion"
import Button from "../button"
import Image from "next/image"
function DetailProduct ({product}:{product: details}) {


  return (
     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 ">
      <Image className=" bg-gray-400  rounded-xl  mb-2  w-full "  src={product?.attributes?.banner?.data?.attributes?.formats?.url} width={250} height={250} alt="producti img" />
      <div className="">
                 <h3 className="col-span-2">{product?.attributes?.title}</h3>
                 <span>{`$ ${product?.attributes?.prix}`}</span>
                <Button lable="Add to Chart" style=" text-[13px] border-[1px] border-gray-400  hover:border-black " />
                <Button lable="Buy Now " style=" text-[13px] bg-black text-white hover:text-black hover:bg-white hover:border-[1px]  hover:border-black  " />
              </div>
     </div>
  )
}

export default DetailProduct
