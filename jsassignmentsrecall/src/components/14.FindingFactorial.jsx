
import React from 'react';
import { useState } from 'react';

function FindingFactorial() {
  let [value , setValue] = useState('');
  let [result , setResult] = useState(null);
  
  function handleChange(e){
        setValue(e.target.value)
  }

  
  function handleClick(){
    // console.log(value);
    let result = 1;
    // value.map(item => result *= item);
    // setResult(result);
    for (let i = value ; i >= 1 ; i--){
    
      result *= i ;
      
    }
    setResult(result);
    setValue('');
  }
  return (
    <>
    <div className="exercise1">
         <h5>Q : Given a number n Calculate the factorial of the number

         </h5>

         <label htmlFor="questionNo14">Place your value here : </label>

         <input type="number" onChange={handleChange} value={value}/> <br/>

         <button onClick={handleClick}>Get Result</button>

         <p>{result !== null ? ` ${result}` : ''}</p> 
         
      </div>
    </>
  )
}

export default FindingFactorial;