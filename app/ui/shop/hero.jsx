import Image from "next/image"

function Hero({lable , style}) {
 
  return (
        <div className =" overflow-hidden  w-full h-fit flex justify-center">
          <div className={`text-white text-[250px] lg:text-[450px] ${style} `}>{lable } </div>
        </div>
  )
}

export default Hero
