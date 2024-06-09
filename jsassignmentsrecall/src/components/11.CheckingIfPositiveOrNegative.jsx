

import React from 'react'
import { useState } from 'react';

function CheckingIfPositiveOrNegative() {
  let [value , setValue] = useState('');
  let [result , setResult] = useState(null);
  
  function handleChange(e){
        setValue(e.target.value)
  }

  function handleClick(){
    if (value == 0 ){
      setResult("0 is neutral");
    }
    else if (value > 0 ){
      setResult ("The given no. is a positive integer.");
    }
    else {
      setResult("The given no. is a negative integer.");
    }
    setValue('');
  }


  return (
    <>
    <div className="exercise1">
         <h5>Q : Write a program that determines whether a given number is positive or negative.
         </h5>

         <label htmlFor="questionNo11">Place your value here : </label>

         <input type="number" onChange={handleChange} value={value}/> <br/>

         <button onClick={handleClick}>Get Result</button>

         <p>{result !== null ? ` ${result}` : ''}</p> 
         
      </div>
    </>
  )
}

export default CheckingIfPositiveOrNegative;