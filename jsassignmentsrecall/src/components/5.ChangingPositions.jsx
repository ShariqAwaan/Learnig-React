
import React from 'react'
import { useState } from 'react';

function ChangingPosition() {
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
            let newString = changingPositions[0] + changingPositions + changingPositions[0];
               setResult(newString);
            }
            
            setValue('');
      }
  return (
    <>
      <div className="exercise1">
         <h5>Q : Write a JavaScript program to create another string from a given string with the first character of the given string added to the front and back.  
         </h5>

         <label htmlFor="questionNo5">Place your value here : </label>

         <input type="text" onChange={handleChange} value={value}/> <br/>

         <button onClick={handleClick}>Get Result</button>

         <p>{result !== null ? ` ${result}` : ''}</p> 
         
      </div>
    </>
  )
}

export default ChangingPosition;