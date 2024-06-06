import React from 'react';
import { useState } from 'react';

function SqOfNum() {
  let [number , setNumber] = useState('');
  const [result, setResult] = useState(null);

  function handleInput(e){
    setNumber(e.target.value);
  }
  function handleClick() {
    setResult(number * number);
    setNumber('');
  }
  
  
  return (
    <>
   

      <div className="exercise1">
      <h5>Q: Function that returns the square of a number</h5>
      <label htmlFor="questionNo1">Place your value here : </label>
      <input type="number"  onChange={handleInput} /> <br/>
      <button onClick={handleClick}>Get Result</button>
      <p>{result !== null ? `The square of the given number is ${result}` : ''}</p>
      </div>

      
    
    </>
  )
}

export default SqOfNum;