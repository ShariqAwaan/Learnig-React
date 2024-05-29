// import React,{useState} from 'react'

// function Myfirstcomponent({name,age,gender}) {
//   const [count,setCount] = useState(0);
//   const [person,setPerson] = useState("");

//   function mFunc(e){
//     return setPerson(e.target.value)
//   }
// function myFunc(){
//   return setCount((prev)=> prev++);
//   // return setCount((prev)=> prev+1);
// }
//   return (
//     <div>
//       <p>{name}</p>
//       <p>{age}</p>
//       <p>{gender}</p>
//       <button onClick={myFunc}>Click</button>
//       <p>{count}</p>
//       <input type="text" onChange={mFunc} />
//       <p>{person}</p>
//     </div>
    
//   )
// }

function Myfirstcomponent(){
  return(
    <>
    <p>This is my First Component</p>
    </>
  );

}

export default Myfirstcomponent;