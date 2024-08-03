import Background from "../ui/background"
import Hero from "../ui/shop/hero"
import AboutPage from "@/app/ui/About/aboutPage"
function Page() {
  return (
    <>
    <Background url="../images/about.jpg" />
    <section  id="BLOG" className='pt-[70px] w-full  z-10 '>
      <Hero lable="Blog"  />
      <AboutPage />
    </section>
  </>
  )
}

export default Page
