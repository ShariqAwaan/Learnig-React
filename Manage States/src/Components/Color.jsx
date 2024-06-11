import React,{useContext} from 'react';
import { ColorCreate } from '../Context/ColorContext';

function Color() {
  const {color,setColor} = useContext(ColorCreate);
  function handleClick(){
    setColor(color + 2)
  }
  return (
    <>
    <p>Color : {color}</p>
    <button onClick={handleClick}>Click</button>
    </>
  )
}

export default Color;