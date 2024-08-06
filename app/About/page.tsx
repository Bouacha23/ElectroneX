import Background from "../ui/background"
import Hero from "../ui/shop/hero"
import AboutPage from "@/app/ui/About/aboutPage"
function page() {
  return (
    <>
    <Background url="../images/about.jpg" />
    <section  id="About" className='pt-[70px] w-full  z-10 lg:-translate-y-[150px] '>
    <Hero lable="About" style="transform translate-y-[100px] lg:translate-y-[160px]" />
      <AboutPage />
    </section>
  </>
  )
}

export default page
