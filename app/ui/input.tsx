import {FormInput } from "@/app/lib/defintion"


const Input : React.FC<FormInput>  =  ({ style , placeholder , type} ) =>  {
  return (
    <>
        <input className={` ${style} pr-2 outline-none text-[0.9rem] placeholder-primary `} type={type} placeholder={placeholder} />
        
    </>
  )
}

export default Input
