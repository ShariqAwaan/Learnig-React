import React from 'react';
import { useState } from 'react';

function RemovingChar() {

      let [value , setValue] = useState('');
      let [remove , setRemove] = useState('');
      let [result , setResult] = useState(null);
      
      function handleInput(e){
            setValue(e.target.value)
      }
      function handleChange(e){
            setRemove(e.target.value)
      }
      function handleClick(){
            let givenInput = value;
            let findingIndex = remove;

            let indexToRemove = givenInput.indexOf(findingIndex);
            // console.log(indexToRemove);
            let newInput = givenInput.replace(givenInput[indexToRemove] , '');
            // console.log(newInput);


            setResult(newInput);
            setValue('');
            setRemove('');
      };

  return (
    <>
    <div className="exercise1">
         <h5>Q : Remove a character at the specified position of a given string and return the new string
         </h5>

         <label htmlFor="questionNo3"> Place your 'value' here : </label>
         <input type="text" onChange={handleInput} value={value}/> <br/>

         <label htmlFor="questionNo3">Place value to remove : </label>
         <input type="text" onChange={handleChange} value={remove}/> <br/>

         <button onClick={handleClick}>Get Result</button>

         <p>{result !== null ? `The new string is ${result}` : ''}</p> 
         
      </div>
    </>
  )
}

export default RemovingChar;