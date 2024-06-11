import React,{useContext} from 'react';
import { counterContext } from '../Context/counterContext';

function Counter() {
  const {counter , setCounter,myArr} = useContext(counterContext);
  function handleCount(){
    setCounter(counter + 1 )
  }

  return (
    <div>
      <p>count:{counter}</p>
      <button onClick={handleCount}>Click To Add</button>
      <ul>{myArr.map((num) => (
        <li>{num}</li>
        ))}</ul>
    </div>
  )
}

export default Counter