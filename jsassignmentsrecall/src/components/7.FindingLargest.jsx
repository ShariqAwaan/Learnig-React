import React from 'react'
import { useState } from 'react';


function FindingLargest() {
  let [firstValue , setFirstValue] = useState('');
  let [secondValue , setSecondValue] = useState('');
  let [thirdValue , setThirdValue] = useState('');
  let [result , setResult] = useState(null);
  
  function handleFirstChange(e){
        setFirstValue(e.target.value)
  }
  function handleSecondChange(e){
        setSecondValue(e.target.value)
  }
  function handleThirdChange(e){
        setThirdValue(e.target.value)
  }


  function handleClick(){
    if (firstValue === secondValue && firstValue === thirdValue){
       setResult("All the values are equal i.e. " + firstValue)
    }
    else if (firstValue > secondValue && firstValue > thirdValue){
       setResult(firstValue);
    }
    else if (secondValue > firstValue && secondValue > thirdValue){
       setResult(secondValue);
    }
    else if (thirdValue > secondValue && thirdValue > firstValue){
       setResult(thirdValue);
    }
    else {
      setResult("Please fill all the fields first!")
    }
        
    setFirstValue('');
    setSecondValue('');
    setThirdValue('');
  }

  return (
    <>
    <div className="exercise1">
         <h5>Q : Write a JavaScript program to find the largest of three given integers.

         </h5>

         <label htmlFor="questionNo7">Place your value here : </label>
         <input type="number" onChange={handleFirstChange} value={firstValue}  placeholder="Enter First Number"/> <br/>

         <label htmlFor="questionNo7">Place your value here : </label>
         <input type="number" onChange={handleSecondChange} value={secondValue}  placeholder="Enter Second Number"/> <br/>


         <label htmlFor="questionNo7">Place your value here : </label>
         <input type="number" onChange={handleThirdChange} value={thirdValue}  placeholder="Enter Third Number"/> <br/>

         <button onClick={handleClick}>Get Result</button>

         <p>{result !== null ? ` ${result}` : ''}</p> 
         
      </div>
    </>
  )
}

export default FindingLargest;