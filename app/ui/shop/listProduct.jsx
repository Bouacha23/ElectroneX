

import { fetchProdcutList } from "@/app/lib/data"
import { useState ,useEffect} from "react"
import Image from "next/image"
import  Button from "@/app/ui/button"
import { FaStar } from "react-icons/fa"


 function ListProduct () {


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
    <div className=" pt-8 grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-5"> 
        {
          productList.map((item) => 
            <article className="" key={item.id}>
              <Image  src="" width={250} height={250} alt="producti img" />
              <div className="info grid grid-cols-2 gap-2">
                 <h3 className="col-span-2">{item.attributes.title}</h3>
                 <span><FaStar size={12} color="gray" /> <span className="text-gray-500 text-[12px]">{item.attributes.riting } </span> </span>
                 <span>{`$ ${item.attributes.prix}`}</span>
                <Button lable="Add to Chart" style=" text-[13px] border-[1px] border-gray-400  hover:border-black " />
                <Button lable="Buy Now " style=" text-[13px] bg-black text-white hover:text-black hover:bg-white hover:border-[1px]  hover:border-black  " />
              </div>

            </article>
           )
        }
    </div>
  )
}

export default ListProduct
