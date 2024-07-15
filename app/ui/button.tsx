'use client '
import  {ButtonProps } from '@/app/lib/defintion'
const Button:React.FC<ButtonProps> = ({ lable, onClick , style} ) => {
  return (
    <button className ={` text-sm ${style}  border-black border-[1px] rounded-full  py-[5px] px-4`}  onClick={onClick}>
        {lable}
    </button>
  )
}

export default Button
