

import React from 'react'
import { useState } from 'react'

function FindingArmStrongNumber() {
  let [firstValue , setFirstValue] = useState('');
  let [result , setResult] = useState(null);
  
  function handleFirstChange(e){
        setFirstValue(e.target.value)
  }



  function handleClick(){
  let stringedinput = firstValue.toString();
  let firstNo = parseInt(stringedinput[0]);
  let secondNo = parseInt(stringedinput[1]);
  let thirdNo = parseInt(stringedinput[2]);

  let cubeOfFirstNo = Math.pow(firstNo , 3);
  let cubeOfSecondNo = Math.pow(secondNo , 3);
  let cubeOfThirdNo = Math.pow(thirdNo , 3);

  

  let cubeOfAllNo = cubeOfFirstNo + cubeOfSecondNo + cubeOfThirdNo ;
  // console.log(cubeOfAllNo);
  // console.log(firstValue);
  
   if (firstValue < 100 || firstValue > 1000){
    setResult ("The No. must be 3 digits");
   }
   else if ( cubeOfAllNo == firstValue ){
    setResult ("The no. is an ArmStrong No." );
   }
   else{
    setResult ("The no. is not ArmStrong No." );
   }

   setFirstValue('');
  }

  return (
    <>
<div className="exercise1">
         <h5>Q : Write a JavaScript program to find the Armstrong numbers of 3 digits. <br />
         Note : An Armstrong number of three digits is an integer such that the sum of the cubes of its digits is equal to the number itself. For example, 371 is an Armstrong number since 3**3 + 7**3 + 1**3 = 371.

         </h5>

         <label htmlFor="questionNo9">Place your value here : </label>
         <input type="number" onChange={handleFirstChange} value={firstValue}  placeholder="Value b/w 99 and 1000"/> <br/>

         

         <button onClick={handleClick}>Get Result</button>

         <p>{result !== null ? ` ${result}` : ''}</p> 
         
      </div>
    </>
  )
}

export default FindingArmStrongNumber;