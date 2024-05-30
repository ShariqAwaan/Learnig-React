// import React from 'react'
// import Checkingprops from "./checkingprops";


// function Profile(props) {
//   return (
//     <div style={{border: "2px solid green" , backgroundColor: 'lightblue'}}>
//       <h3 style={{color: 'green'}}>Hi, I am Shariq Abdullah</h3>
//       <ul style={{listStylePosition: 'inside'}}>
//         <li>I am 20 years Old. I am from Talagang,Punjab.</li>
//         <li>I have done my FSC. Pre Engineering from Chakwal.</li>
//         <li>I am now Learning FrontEnd Development from Upwards</li>
//       </ul>
//      <Checkingprops {...props}/>
//     </div>
//   )
// }

// export default Profile;

import GetImageUrl from "../utils/ExtractingComponent";

function Profile({maria , katsuko}) {
  console.log(maria);
  console.log(katsuko);
  return (
    <>

      <h1>Notable Scientists</h1>
      <section className="profile">
        <h2>{maria.name}</h2>
        
        <img
          className="avatar"
          src={GetImageUrl('szV5sdG')}
          alt="Maria Skłodowska-Curie"
          width={70}
          height={70}
        />
        <ul>
          <li>
            <b>Profession: </b> 
            {maria.profession}
          </li>
          <li>
            <b>Awards: 4 </b> 
            {maria.awards}
          </li>
          <li>
            <b>Discovered: </b>
            {maria.discovery}
          </li>
        </ul>
      </section>
      <section className="profile">
        <h2>{katsuko.name}</h2>
        <img
          className="avatar"
          src={GetImageUrl('YfeOqp2')}
          alt="Katsuko Saruhashi"
          width={70}
          height={70}
        />
        <ul>
          <li>
            <b>Profession: </b> 
            {katsuko.profession}
          </li>
          <li>
            <b>Awards: 2 </b> 
            {katsuko.awards}
          </li>
          <li>
            <b>Discovered: </b>
            {katsuko.discovery}
          </li>
        </ul>
      </section>

    </>
  )
}

export default Profile;