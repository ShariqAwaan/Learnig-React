import React from 'react'

function Message({value}){
  return (
    <>
    {value && "Hii how are you"}
    </>
  );
}

function CRMethodthree() {
  return (
    <div>
      <Message value={true} />
    </div>
  )
}

export default CRMethodthree;