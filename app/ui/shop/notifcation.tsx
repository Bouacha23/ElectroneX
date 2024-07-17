import  Input from "@/app/ui/input"
import Button from "../button"

const  Notifcation :React.FC  =()=> {
  return (
    <section id="notifcation  " className="  mt-24 bg-gradient-to-b from-back  to-black px-2  py-12 rounded-xl grid grid-cols-1 md:grid-cols-3 gap-2  ">
        <h1 className="text-3xl md:text-5xl text-white col-span-2"> Ready to Get Our New Stuff ? </h1>
        <div className="text-white col-span-3  md:col-span-1">
            <h3>Stuffus for homes and needs </h3>
            <p className="text-gray-400 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente labore alias placeat tenetur expedita quaerat repellat. Ullam in animi sapiente mollitia, minus temporibus voluptate quasi quos, dolorem illum nisi. Deleniti.</p>
        </div>
        <div className="form min-w-fit  clo-span-1 md:col-span-2 lg:col-span-1  bg-white  w-full flex justify-between px-4 py-2 rounded-full">
            <Input type="text" placeholder="Your Email"/>
            <Button lable="Send" style="px-8  bg-black text-white "  />
        </div>
    </section>
  )
}

export default Notifcation
