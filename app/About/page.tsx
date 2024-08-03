import Background from "../ui/background"
import Hero from "../ui/shop/hero"
import AboutPage from "@/app/ui/About/aboutPage"
function page() {
  return (
    <>
    <Background url="../images/about.jpg" />
    <section  id="About" className='pt-[70px] w-full  z-10 '>
      <Hero lable="About"  style=" " />
      <AboutPage />
    </section>
  </>
  )
}

export default page
