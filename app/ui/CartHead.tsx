import { useContext } from "react"
import { ElectronContext } from "../(Context)/context"


function CartHead() {   
  const {  setCartState} = useContext(ElectronContext)
  const handelCart = () => {
    setCartState(false)
  }
  const { cart , setCart} =useContext(ElectronContext) ;
  return (
            
        <div
        className=" absolute w-[250px] sm:w-[350px]  md:block lg:top-[50px] top-[53px] right-[10%]  w-screen max-w-sm  bg-white border border-[1px] border-black px-4 py-8 sm:px-6 lg:px-8"
        aria-modal="true"
        role="dialog"
        
        >
        <button onClick={ handelCart} className="absolute end-4 top-4 text-gray-600 transition hover:scale-110">
            <span className="sr-only">Close cart</span>

            <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-5 w-5"
            >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>

        <div className="mt-4 space-y-6">
            <ul className="space-y-4  overflow-y-scroll max-h-[300px]">
            {
                  cart.map( (item :any) => (
                            <li key={item?.id} className="flex items-center gap-4"  >
                            <img

                            src={ item.product.attributes.banner.data.attributes.name}
                            alt=""
                            className="size-16 rounded object-cover bg-gray-300"
                            />
        
                            <div>
                            <h3 className="text-sm text-gray-900">{item.product.attributes.title}</h3>
        
                            <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                                <div>
                                <dt className="inline">Price : </dt>
                                <dd className="inline">{item.product.attributes.prix }</dd>
                                </div>
                            </dl>
                            </div>
                        </li>
                ))
            }
            </ul>

            <div className="space-y-4 text-center">
            <a
                href="/cart"
                className="block rounded border border-gray-600 px-5 py-3 text-sm text-gray-600 transition hover:ring-1 hover:ring-gray-400"
            >
                View my cart (2)
            </a>

            <a
                href="/checkout"
                className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
            >
                Checkout
            </a>

            <p
                onClick={handelCart}
                className="inline-block text-sm text-gray-500 underline underline-offset-4 transition hover:text-gray-600"
            >
                Continue shopping
            </p>
            </div>
        </div>
        </div>
  )
}

export default CartHead
