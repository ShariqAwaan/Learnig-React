import React from 'react'
import Profile from './Profile';



function Default( props) {

  return (
    <div>
      

      <Profile {...props}/>
    </div>

  )
}

export default Default;

// function Default({name , gender="male" , props}) {

//   return (
//     <div>
//       <p>The name is {name}</p>
//       <p>The gender is {gender}</p>

//       <Profile {...props}/>
//     </div>

//   )
// }

// export default Default;