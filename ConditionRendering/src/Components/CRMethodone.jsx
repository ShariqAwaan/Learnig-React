import React from 'react'


export function UserStatus({name , Userstatus}){
  

  return ( 
    
    <li>

    {Userstatus ? name + " is logged in " : name + " is logged out"}

    </li>
    
  );
}

function CRMethodone() {
  
  
  return (
    <>
    
    <ul>
    
      <UserStatus  Userstatus= {true} name="Shariq"
      />
    
    
      <UserStatus  UserStatus= {false} name="Shariq"
      />
    
    </ul>
    
    </>
  )
}

export default CRMethodone;