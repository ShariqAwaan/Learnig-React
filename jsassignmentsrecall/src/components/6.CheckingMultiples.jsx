
import React from 'react'
import { useState } from 'react';

function CheckingMultiples() {
      let [value , setValue] = useState('');
      let [result , setResult] = useState(null);
      
      function handleChange(e){
            setValue(e.target.value)
      }
      function handleClick(){
           if (value <= 0){
              setResult('Please enter some value first')
            }  else if (value % 3 === 0 && value % 7 === 0){
              setResult('The given no. is multiple of both 3 and 7')
            } else if (value % 3 === 0 ){
              setResult('The given no. is multiple of 3')
            } else if (value % 7 === 0 ){
              setResult('The given no. is multiple of 7')
            } else{
              setResult('The given no. is niether multiple of 3 nor 7')
            }
            
            setValue('');
      }
  return (
    <>
      <div className="exercise1">
         <h5>Q : Write a JavaScript program to check whether a given positive number is a multiple of 3 or 7. 
         </h5>

         <label htmlFor="questionNo4">Place your value here : </label>

         <input type="text" onChange={handleChange} value={value}/> <br/>

         <button onClick={handleClick}>Get Result</button>

         <p>{result !== null ? ` ${result}` : ''}</p> 
         
      </div>
    </>
  )
}

export default CheckingMultiples;