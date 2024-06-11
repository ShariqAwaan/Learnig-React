import { createContext ,useState} from "react";

export const counterContext = createContext() 


function CounterProvider({children}) {
  
  const [counter , setCounter] = useState(0);
  const myArr = [1,2,3,4,5]

  return (
    <counterContext.Provider value={{counter,setCounter,myArr}}>
      {children}
    </counterContext.Provider>
  )
}

export default CounterProvider;