
import { BiSearchAlt } from "react-icons/bi";
import Button from "@/app/ui/button"

function Search() {

  return (
    <div className="max-w-[600px] flex py- pl-4 justify-between items-center  border-[1px] border-black rounded-full  ">
        <div className="flex items-center  gap-2 justify-start">
        <BiSearchAlt size={20}  className="text-primary" />
        <input className=" pr-2 outline-none text-[0.9rem] placeholder-primary " type="text" placeholder="Search On Electronx" />
        </div>
        <Button  lable= "Search"  style=" text-white bg-black hover:bg-white hover:text-black " />
    </div>
  )
}

export default Search
