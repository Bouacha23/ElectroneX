import  {ButtonProps } from '@/app/lib/defintion'
const Button:React.FC<ButtonProps> = ({ lable, onClick , style} ) => {
  return (
    <button className ={`${style} border-black border-[1px] rounded-full  py-2 px-4`}  onClick={onClick}>
        {lable}
    </button>
  )
}

export default Button
