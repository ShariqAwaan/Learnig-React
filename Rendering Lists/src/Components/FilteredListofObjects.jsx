import React from 'react'

function FilteredListofObjects({people}) {
  let filteredObjects = people.filter(item => item.age < 30 );
  let mappedObjects = filteredObjects.map(items => <li key={items.id}>{items.name + " aged " + items.age}</li>)

  return (
    <>
    <h5>These are the people who are under 30</h5>
    <ol>{mappedObjects}</ol>
    </>
  )
}

export default FilteredListofObjects;