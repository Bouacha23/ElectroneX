import { FaRing , FaShoppingBag } from "react-icons/fa"
import { FiX } from 'react-icons/fi';



type notf =  {
    label : string ,
    style ?: String
    logo ?: string
}
function  CartNotfication ( {label   , style , logo }: notf) {
  return (
    <div className=" grid-cols-1  z-50 py-2 px-4 rounded-t-2xl  fixed  w-full h-24 bg-green-400 text-white style bottom-0 ">
        <div className="flex justify-between">
         <h1 className="text-white  text-lg text-bold "> Notifications </h1>
         <FiX size={25} className=" transform -translate-y-1"  />
        </div>
        <div className=" flex  pt-2  items-center  justify-start gap-8 ">
            <FaShoppingBag color="white " size= {40} className=" border border-2 border-white p-2 rounded-lg" /> 
             <h1 className="text-white text-xl  uppercase "> {label }</h1>
        </div>
    </div>
  )
}

export default CartNotfication 
