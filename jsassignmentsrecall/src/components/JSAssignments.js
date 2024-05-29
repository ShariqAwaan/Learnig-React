import React from 'react'

function JSAssignments() {
  // let n = document.getElementById("sqOfNo") ;
  function squareOfNum(no){
    // let no = n.value ;
    let num = no**2;
    return `The answer is ${num}`;
  }
  return (
    <>
    <div id="mainContainer">
      <h3 style={{color: 'green'}}>JS Assignments Recall</h3>

      <div className="exercise1">
      <h5>Q: Function that returns the square of a number</h5>
      <label htmlFor="questionNo1">Place your value here : </label>
      <input type="text" id='sqOfNo'  /> <br/>
      <p>{squareOfNum(5)}</p>
      </div>

      <div className="exercise1">
      <h5>Q: Function that returns the square of a number</h5>
      <label htmlFor="questionNo1">Place your value here : </label>
      <input type="text"  /> <br/> 
      <p></p>
      </div>

      <div className="exercise1">
      <h5>Q: Function that returns the square of a number</h5>
      <label htmlFor="questionNo1">Place your value here : </label>
      <input type="text"  /> <br/>
       <p></p> 
      </div>

      <div className="exercise1">
      <h5>Q: Function that returns the square of a number</h5>
      <label htmlFor="questionNo1">Place your value here : </label>
      <input type="text"  /> <br/> 
      <p></p>     
      </div>

    </div>
    </>
  )
}

export default JSAssignments