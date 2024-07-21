import {recomandationtype} from "@/app/lib/defintion"
import { FaStar } from "react-icons/fa"
import Image from "next/image"
import Button from "./button"


function Recomandation({list , label} : recomandationtype) {
  return (
        <div>
            <h1> {label}</h1>
        <div className="grid grid-cols-2 sm:grid-cols-6 gap-2">
            {
                list.map((item) => 
                    <article className=" relative" key={item.id}>
                    <Image className=" bg-gray-400  rounded-xl  mb-2  w-full "  src={item.attributes?.banner?.data?.attributes?.formats?.url} width={250} height={250} alt="producti img" />
                    <div className="info grid grid-cols-2 gap-2">
                        <h3 className="col-span-2">{item.attributes.title}</h3>
                        <span><FaStar size={12} color="#FFFF00" /> <span className="text-gray-500 text-[12px]">{item.attributes.riting } </span> </span>
                        <span>{`$ ${item.attributes.prix}`}</span>
                        <Button lable="Add to Chart" style=" text-[13px] border-[1px] border-gray-400  hover:border-black " />
                        <Button lable="Buy Now " style=" text-[13px] bg-black text-white hover:text-black hover:bg-white hover:border-[1px]  hover:border-black  " />
                    </div>
                    <span className=" absolute top-4 right-4 bg-white rounded-full text-sm  border-[1px] border-primary px-2 py-[5px]">{item.attributes.category}</span>

                    </article>
                )
                }
        </div>
    </div>
  )
}

export default Recomandation
