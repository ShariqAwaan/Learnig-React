import React from 'react'

function FruitsComponent(props) {
  // console.log(props.initialItems);

  let items = props.initialItems;

  let initialItems = items.map(item => <li key={item.id}>{item.name}</li>);
  

  return (
    <>
    <ul>{initialItems}</ul>
    </>
  )
}

export default FruitsComponent;