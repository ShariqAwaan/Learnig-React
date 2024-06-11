import { createContext, useContext , useState } from "react";

export const ColorCreate = createContext();



function ColorContext({children}) {
  const [color , setColor] = useState(0);

  return (
    <ColorCreate.Provider value={{color , setColor}}>
      {children}
    </ColorCreate.Provider>
  )
}

export default ColorContext
