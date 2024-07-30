import { FaRing } from "react-icons/fa"
type notf =  {
    label : string ,
    style ?: String
    logo ?: string
}
function  CartNotfication ( {label   , style , logo }: notf) {
  return (
    <div className=" fixed  w-full h-16 bg-green-500 text-white style bottom-0 ">
        notifcation 
        <FaRing/>
    </div>
  )
}

export default CartNotfication 
