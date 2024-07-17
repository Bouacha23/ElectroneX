import { useParams } from "next/navigation"

function page() {
    const parmas = useParams()

  return (
    <div>
        {parmas.id} 
    </div>
  )
}

export default page

