import React from 'react';
import { useState } from 'react';

function AddingPY() {
      let [value , setValue] = useState('');
      let [result , setResult] = useState(null);
      
      function handleChange(e){
            setValue(e.target.value)
      }
      function handleClick(){
            if(value[0] === "P" && value[1] === "y"){
                  setResult(value);
            } else if(value[1] === "y" && value[0] === "p"){
                  setResult(value);
            } else {
                  setResult("Py" + value)
            }
            
            setValue('');
      }
  return (
    <>
      <div className="exercise1">
         <h5>Q : Write a JavaScript program to create another string by adding "Py" in front of a given  string. If the given string begins with "Py" return the original string.  </h5>

         <label htmlFor="questionNo2">Place your value here : </label>

         <input type="text" onChange={handleChange} value={value}/> <br/>

         <button onClick={handleClick}>Get Result</button>

         <p>{result !== null ? `The new string is ${result}` : ''}</p> 
         
      </div>
    </>
  )
}

export default AddingPY;