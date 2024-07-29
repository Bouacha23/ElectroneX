
import { createContext , useState} from "react";

export const ElectronContext = createContext()

export const ElectronProvider = ({ children }) => {
    const [cartState , setCartState] = useState(false)
    const [cart , setCart ] = useState([])
    return (
     
      <ElectronContext.Provider value={{ cartState , setCartState ,cart , setCart  }}>
        {children}
      </ElectronContext.Provider>
    );
  };