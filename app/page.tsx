
import Hero from '@/app/ui/shop/hero'
import Products from "@/app/ui/shop/products"

export default function Shop() {
  return (
    <>
      <section  id="shop" className='pt-[70px] w-full  z-10'>
        <Hero/>
        <Products/>
      </section>
    </>
  );
}
