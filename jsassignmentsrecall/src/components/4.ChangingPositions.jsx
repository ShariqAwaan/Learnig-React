
import React from 'react'
import { useState } from 'react';

function ChangingPositions() {
      let [value , setValue] = useState('');
      let [result , setResult] = useState(null);
      
      function handleChange(e){
            setValue(e.target.value)
      }
      function handleClick(){
            if (value.length <= 1){
              return setResult("The length of the string should be more than 1")
            } else {
            let changingPositions = value;
            let newString = changingPositions[changingPositions.length -1] + changingPositions.slice( 1 , changingPositions.length - 1) + changingPositions[0];
               setResult(newString);
            }
            
            setValue('');
      }
  return (
    <>
      <div className="exercise1">
         <h5>Q : Write a JavaScript program to create a new string from a given string by changing the position of the first and last characters. The string length must be broader than or equal to 1.  
         </h5>

         <label htmlFor="questionNo4">Place your value here : </label>

         <input type="text" onChange={handleChange} value={value}/> <br/>

         <button onClick={handleClick}>Get Result</button>

         <p>{result !== null ? ` ${result}` : ''}</p> 
         
      </div>
    </>
  )
}

export default ChangingPositions;