


export const skeletonProductList = ()=> {
    return 
    (
        <div> data fetching </div>
    )
}


export const CartPageSekeleton = () => {
    const timesToRepeat = 3;
    return (
        <div >
        {Array.from({ length: timesToRepeat }).map((_, index) => (
            <li className=" mb-2 flex items-center gap-4"  key={index} >
            <img
            className="size-16 rounded animate-pulse bg-gray-300"
            />
            <div>
            <h3 className="text-sm text-gray-900 bg-gray-300 animate-pulse w-[50px] h-[5px] "></h3>
        
            <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                <div>
                <dt className="inline">Price : </dt>
                <dd className="inline  bg-gray-300 animate-pulse w-[30px] h-[5px]"></dd>
                </div>
            </dl>
            </div>
            <div className="flex flex-1 items-center justify-end gap-2">
            <button className=" bg-gray-300 animate-pulse w-[20px] h-[20spx]">
            </button>
            </div>
        </li> 
        ))}
      </div>
        
    )
}

    
  
