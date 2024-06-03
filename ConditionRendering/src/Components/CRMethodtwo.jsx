import React from 'react'

export function Temperature({value}){

  return (
    <>
    {value >= 40 ? "Boht Garmi hai yaar" : "Guzara kro yaar itni garmi ni hai"}
    </>
  );
}

function CRMethodtwo() {
  return (
    <div>
      <Temperature value={53} />
    </div>
  )
}

export default CRMethodtwo;