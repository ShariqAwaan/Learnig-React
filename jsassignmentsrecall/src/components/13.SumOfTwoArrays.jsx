

import React from 'react';
import { useState } from 'react';

function SumOfTwoArrays() {
  let [result , setResult] = useState(null);

  function handleClick(){
    let arr_1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2];
    let arr_2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26];


     let result1 = 0;
     let result2 = 0;
    // for (let i = 0 ; i < arr_1.length ; i++){
    // let sumOf1stArray = arr_1[i];
    // result1 += sumOf1stArray;
    // }
    // console.log (result1);

    arr_1.map(item => result1 += item);
    arr_2.map(item => result2 += item);

    // for (let i = 0 ; i < arr_2.length ; i++){
    // let sumOf2ndArray = arr_2[i];
    // result2 += sumOf2ndArray;
    // }
    // console.log(result2)
    let finalResult = result1 + result2 ;
    setResult(finalResult);
  }

  return (
    <>
    <div className="exercise1">
         <h5>Q : Get the sum of two arrays…actually the sum of all their elements. <br />
          P.S. Each array includes only integer numbers. Output is a number too. <br />
          arr_1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2]; // -- 276
          arr_2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26]; // -- 351
          // Example output: 
          // 276 + 351 = 627
         </h5>

         

         <button onClick={handleClick}>Get Result</button>

         <p>{result !== null ? ` ${result}` : ''}</p> 
         
      </div>
    </>
  )
}

export default SumOfTwoArrays;