import React from 'react'

function ListofIntegers({numbers}) {
  let fileteredNumbersList = numbers.filter(item => item %5 == 0 );
  let numbersList = fileteredNumbersList.map((items , i) => <li key={i}>{items}</li>);
  return (
    <>
    <ol>{numbersList}</ol>
    </>
  )
}

export default ListofIntegers;