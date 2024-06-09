import React from 'react'
import { useState } from 'react';


function EvaluatingTotalMarks() {
  let [firstValue , setFirstValue] = useState('');
  let [secondValue , setSecondValue] = useState('');
  let [result , setResult] = useState(null);
  
  function handleFirstChange(e){
        setFirstValue(e.target.value)
  }
  function handleSecondChange(e){
        setSecondValue(e.target.value)
  }
  


  function handleClick(){
    if (firstValue < 90 && secondValue === "Yes" ){
      setResult ("Your grade is not A+");
    }
    else if (firstValue < 90 && secondValue === "yes" ){
      setResult ("Your grade is not A+");
    }
    else if (firstValue >+ 90 && secondValue === "Yes"){
      setResult ("Your grade is A+ and True");
    }
    else if (firstValue >+ 90 && secondValue === "yes"){
      setResult ("Your grade is A+ and True");
    }
    else if (firstValue >= 89 && secondValue === "No"){
      setResult ("Your grade is A+ and False")
    }
    else if (firstValue >= 89 && secondValue === "no"){
      setResult ("Your grade is A+ and False")
    }
    else{
      setResult ("Your grade is not A+ and False")
    }
        
    setFirstValue('');
    setSecondValue('');
  }

  return (
    <>
    <div className="exercise1">
         <h5>Q : Write a JavaScript program to evaluate a student's total marks across various examinations and determine their grade. The grading criteria are as follows: <br />
        1. If the total marks fall within the range of 89 to 100 (inclusive), the student receives an A+ grade. <br />
        2. If the examination is labeled as "Final-exam," the student will receive an A+ grade only if their total marks are 90 or greater. Assume that final examination means we pass 'true' as second parameter otherwise blank.<br />
        3. If the student achieves an A+ grade, the program should return 'true'; otherwise, it should return 'false'. 
         </h5>

         <label htmlFor="questionNo8">Enter Obtained Marks : </label>
         <input type="number" onChange={handleFirstChange} value={firstValue}/> <br/>

         <label htmlFor="questionNo8">Is Examination Final ? : </label>
         <input type="text" onChange={handleSecondChange} value={secondValue} placeholder="Enter Yes or No"/> <br/>

         <button onClick={handleClick}>Get Result</button>

         <p>{result !== null ? ` ${result}` : ''}</p> 
         
      </div>
    </>
  )
}

export default EvaluatingTotalMarks;