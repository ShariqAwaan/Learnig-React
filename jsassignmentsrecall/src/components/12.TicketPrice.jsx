import React from 'react';
import { useState } from 'react';

function TicketPrice() {
  let [value , setValue] = useState('');
  let [result , setResult] = useState(null);
  
  function handleChange(e){
        setValue(e.target.value)
  }

  function handleClick(){
    if (value < 12 && value > 0){
      setResult ("The Ticket price for you is 5 rupees.")
  
    }
    else if (value <= 0 || value == ""){
      setResult ("Please put some value first");
    }
    else if (value >= 12 && value < 18 ){
      setResult ("The Ticket price for you is 10 rupees.")
    }
    else if (value >= 18 && value < 60 ){
      setResult ("The Ticket price for you is 20 rupees.")
    }
    else {
      setResult ("The Ticket price for you is 15 rupees.")
    }
    setValue('');
  }
  return (
    <>
    <div className="exercise1">
         <h5>Q : Write a program that calculates the ticket price based on age with the following conditions: age below 12 pay a ticket price of 5, age below 18 pay a ticket price of 10, age below 60 pay a ticket price of 20, age over 60 play a ticket price of 15.
         </h5>

         <label htmlFor="questionNo12">Place your Age here : </label>

         <input type="number" onChange={handleChange} value={value}/> <br/>

         <button onClick={handleClick}>Get Result</button>

         <p>{result !== null ? ` ${result}` : ''}</p> 
         
      </div>
    </>
  )
}

export default TicketPrice;