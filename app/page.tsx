
import Hero from '@/app/ui/shop/hero'
import Products from "@/app/ui/shop/products"
import Notifcation from './ui/shop/notifcation';
import Background from './ui/background';
export default function Shop() {
  return (
    <>
      <Background url="../images/hero.jpg" />
      <section  id="shop" className='pt-[70px] w-full  z-10 '>
        <Hero lable="Shop"  style=" " />
        <div className=' w-full md:w-[90%]  bg-white  md:m-auto ' >
          <div className=' bg-white p-2  w-full rounded-lg  transform -translate-y-[120px] md:-translate-y-[150px] lg:-translate-y-[200px] lg:p-8 py-2 '>
          <Products/>
          <Notifcation />
          </div>
        </div>
      </section>
    </>
  );
}
