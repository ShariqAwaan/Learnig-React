import React from 'react'

function Time(hour){
  if(hour < 0 || hour > 24 ){
    return ("Invalid Time")
  } else if(hour < 12){
    return ("Good Morning")
  } else {
    return ("Good Noon")
  }
  
}

function CRMethodfour() {
  // function Time(hour){
  // if(hour < 0 || hour > 24 ){
  //   return ("Invalid Time")
  // } else if(hour < 12){
  //  return ("Good Morning")
  // } else {
  //   return ("Good Noon")
  // }
// }
  return (
    <div>
    {Time(66)}
    {/* <Time hour={33}/> */}
    </div>
  )
}

export default CRMethodfour;