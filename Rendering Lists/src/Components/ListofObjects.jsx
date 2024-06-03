import React from 'react'

function ListofObjects({people}) {
  let listOfPeople = people.map( item  => <li key={item.id}>{`The person's name is " ${item.name} " and the person's age is ' ${item.age} ' `}</li>)

  return (
    <>
    <ul>{listOfPeople}</ul>
    </>
  )
}

export default ListofObjects;