import React from 'react'

function Clock({time}) {

  let className;
  
    let hours = time.getHours();
    if (hours >= 0 && hours <= 6) {
      className = 'night';
    } else {
      className = 'day';
    }
    
  
  
  return (
    <>
    <h1 className="day">
      {time.toLocaleTimeString()}
    </h1>
    <h1 className="night">
      {time.toLocaleTimeString()}
    </h1>
      </>
  );
}

export default Clock;