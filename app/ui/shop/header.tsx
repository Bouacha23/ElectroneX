"use client "
import Link from "next/link"
import {shopLink} from "@/app/lib/defintion"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { UserButton, useUser } from "@clerk/nextjs";
import { FaShoppingBag } from "react-icons/fa"
import CartHead from "../CartHead"
import { use, useContext } from "react"
import { ElectronContext } from "@/app/(Context)/context"
 
function Header() {

  const {user} = useUser()
  const {cartState  , setCartState} =useContext(ElectronContext)
  const pathname = usePathname()
 
  const links:shopLink[] = [
    {id : 1  , name :"About", href : "/About"},
    {id : 2 , name : "Shop" , href : "/"},
    {id : 3 , name : "Blog" , href : "/Blog"},
  ]


  return (
    <header className="bg-white w-full m-auto  fixed  h-[70px] shadow-lg border-b-[1px] border-primary rounded-md z-50  ">
  <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
    <div className="flex h-16 items-center justify-between">
      <div className="md:flex md:items-center md:gap-2">
        <a className="block text-teal-600" href="#">
          <span className="sr-only">Home</span>
          <Image src= "/logo.svg" alt="
          ElectronLogo" width={40} height={40}/>
        </a>
        <div className="hidden md:block">ElectroneX</div>
      </div>

      <div className="hidden md:block">
        <nav aria-label="Global">
          <ul className="flex items-center gap-6 text-sm">
            {links.map((link)=> (
              <li key={link.id}  > <Link href={link.href}  className={pathname === link.href ?"active font-bold" :"text-gray-500 text-lg transition hover:text-gray-500/75"}>{link.name}</Link></li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="flex items-center gap-4 relative">
         {user ?
            <> 
              <div className="pl-12 relative"> 
                <span className={false ? " absolute top-0 -right-[3px] w-[10px] h-[10px] bg-red-600 rounded-full" : "hidden" }></span>
                <FaShoppingBag onClick={()=> {setCartState(true)}} className=" cursor-pointer" size={20} color="gray"/>
              </div>
              <UserButton /> 
              {cartState ? <CartHead/> : null }
            </> 
            :
            <div className="sm:flex sm:gap-4">
              <a
                className="rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white shadow hover:text-black hover:bg-white hover:border-primary border-2"
                href="/sign-in"
              >
                sign-in
              </a>

              <div className="hidden sm:flex">
                <a
                  className="rounded-md bg-gray-600 px-5 py-2.5 text-sm font-medium text-white shadow hover:text-black hover:bg-white hover:border-primary border-2"
                  href="sign-up"
                >
                  Register
                </a>
              </div>
          </div>
        }
        <div className="block md:hidden">
          <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</header>
  )
}

export default Header
