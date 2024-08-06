import Image from "next/image"


type text =  {
  title : string ,
  pargraphe : string 
}
function AboutPage() {


  const aboutText : text[] = [
    {title : "About Us " , pargraphe : "Welcome to Electronx – your one-stop shop for the latest and greatest in electronic devices!"} ,
    {title : "Who We Are", pargraphe : "At Electronx, we are passionate about technology and innovation. Our mission is to bring you the best electronic products from around the world, making cutting-edge technology accessible to everyone. We believe in providing high-quality products that enhance your lifestyle and keep you connected in the digital age."},
    {title : "our Vision " ,pargraphe : "We aim to be a leading provider of electronic devices, known for our quality products, excellent service, and commitment to innovation. We are constantly expanding our product range and improving our services to meet the evolving needs of our customers."}
  ]


  return (
    <div  className=" p-2 md:p-24 md:p-0 rounded-xl  min-h-[400px] padd  bg-white grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-24 md:px-24 ">
       <img src="../images/aboutlogo.png" className=" rounded-xl hidden md:block   " />
      <div className="text">
        {
          aboutText.map((item ,index)=> (
            <div key={index} className= "py-4 ">
                <h1 className="text-2xl font-bold  capitalize mb-4 ">{item.title}</h1>
                <p className="text-gray-600 ">{item.pargraphe}</p>
            </div>
          ))
        }
      </div>
      <p className="text-lg col col-span-2 lg:text-2xl text-center">Thank you for choosing Electronx. We look forward to serving you and helping you stay connected with the latest in technology.</p>
    </div>
  )
}

export default AboutPage
