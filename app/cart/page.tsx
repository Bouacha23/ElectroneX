'use client'
import Background from "../ui/background"
import Hero from "../ui/shop/hero"
import Cartpage from "@/app/ui/Cart/cartpage"

const Page = () => {
   
    return (
        <>
            <Background url="../images/cart.jpg" />
            <section  id="Cart" className='pt-[70px] w-full  z-10 lg:-translate-y-[150px]  '>
            <Hero lable="Cart" style="transform translate-y-[100px] lg:translate-y-[160px]" />
            <Cartpage/>
        </section>
      </>
            )

        }

 export default Page