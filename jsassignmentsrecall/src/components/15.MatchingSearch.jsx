

import React from 'react';
import { useState } from 'react';

function MatchingSearch() {

let [value , setValue] = useState('');
let [result , setResult] = useState(null);

let arary  = ['rameen' , 'rashid', 'ali' , 'alina' , 'aliya' , 'mahnoor' , 'mehwish' , 'sana' , 'tahira' , 'taimoor'] ;

let itrArray = arary.map(item=>item);

function handleChange(e){
      setValue(e.target.value)
      let filteredArray = itrArray.filter((item)=>{
    return item.includes(value.toLowerCase());
  });
  setResult(filteredArray);
}

function handleClick(){
  setValue('');
}

  return (
    <>
    <div className="exercise1">
         <h5>Q : arary  = ['rameen' , 'rashid', 'ali' , 'alina' , 'aliya' , 'mahnoor' , 'mehwish' , 'sana' , 'tahira' , 'taimoor'']. <br />
          a) iterate the array elements with map(). <br />
           b) create a search field and enter some value (i.e. any name). if search matches any name in the array then only that name must be visible.
         </h5>

         <label htmlFor="questionNo15">Search From Above here : </label>

         <input type="text" onChange={handleChange} value={value}/> <br/>

         <button onClick={handleClick}>Reset</button>

         <p>{result !== null ? ` ${result}` : ''}</p> 
         
      </div>
    </>
  )
}

export default MatchingSearch;