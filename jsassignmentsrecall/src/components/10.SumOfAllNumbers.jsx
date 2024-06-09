

import React from 'react'
import { useState } from 'react'

function SumOfAllNumbers() {
  let [result , setResult] = useState(null);

  let numbersArray = [1,13,22,123,49];
  let newArray = 0;
  numbersArray.map(items => newArray += items);

  function handleClick(){
    setResult(newArray);
  }
  return (
    <>
    <div className="exercise1">
         <h5>Q : Calculate the sum of all the numbers in the following array <br />
         numbersArray = [1,13,22,123,49]  </h5>



         <button onClick={handleClick}>Get Result</button>

         <p>{result !== null ? `The Answer is ${result}` : ''}</p> 
         
      </div>
    </>
  )
}

export default SumOfAllNumbers;