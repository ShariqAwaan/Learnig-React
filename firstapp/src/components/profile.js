// import React from 'react'
import Checkingprops from "./checkingprops";


function Profile(props) {
  return (
    <div style={{border: "2px solid green" , backgroundColor: 'lightblue'}}>
      <h3 style={{color: 'green'}}>Hi, I am Shariq Abdullah</h3>
      <ul style={{listStylePosition: 'inside'}}>
        <li>I am 20 years Old. I am from Talagang,Punjab.</li>
        <li>I have done my FSC. Pre Engineering from Chakwal.</li>
        <li>I am now Learning FrontEnd Development from Upwards</li>
      </ul>
     <Checkingprops {...props}/>
    </div>
  )
}

export default Profile;

