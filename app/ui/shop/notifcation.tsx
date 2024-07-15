import  Input from "@/app/ui/input"
import Button from "../button"

const  Notifcation :React.FC  =()=> {
  return (
    <section id="notifcation  " className=" mt-24 bg-white  ">
        <h1> Ready to Get Our New Stuff ? </h1>
        <div className="text">
            <h3>stuffus for homes and needs </h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente labore alias placeat tenetur expedita quaerat repellat. Ullam in animi sapiente mollitia, minus temporibus voluptate quasi quos, dolorem illum nisi. Deleniti.</p>
        </div>
        <div className="form">
            <Input type="text" placeholder="Your Email"/>
            <Button lable="Send"  />
        </div>
    </section>
  )
}

export default Notifcation
