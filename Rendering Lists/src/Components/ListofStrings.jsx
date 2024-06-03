import React from 'react'

function ListofStrings({fruits}) {
  let lists = fruits.map((item , i ) => <li key={i}>{item}</li>);
  return (
    <>
    <ul>{lists}</ul>
    </>
  )
}

export default ListofStrings;