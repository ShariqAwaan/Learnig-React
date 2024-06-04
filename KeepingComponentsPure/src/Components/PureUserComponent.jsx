import React from 'react'

function PureUserComponent({user}) {
  console.log(user.name);

  user.name = "haris";
  return (
    <>
    <p>User name is : {user.name}</p>
    <p>User email is : {user.email}</p>
    </>
  )
}

export default PureUserComponent;