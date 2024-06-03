import React from 'react'

function FilteringList({employees}) {
  let employee = employees.filter(item => item.age >= 16);
  let eligibleEmployees = employee.map((items) => {
  return <li key={items.id}>{items.age >= 18 ? "Name : " + items.name + " ; Age : " +  items.age +" ( Above 18 ) " : "Name : " + items.name +" ; Age :  "  +  items.age + " ( Above 15 but below 18. ) "}</li>
}); 

  return (
    <>
    <h5>Employees of Age greater than 15</h5>
    <ol>
    {eligibleEmployees}
    </ol>
    </>
  )
}

export default FilteringList;