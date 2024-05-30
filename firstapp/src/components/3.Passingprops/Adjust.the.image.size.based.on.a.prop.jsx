// import React from 'react';
import AdjustingSize from '../../utils/adjustingSize';

function Avatar({ person, size }) {
  let thumbnailSize = 's';
  if (size > 90) {
    thumbnailSize = 'b';
  }
  return (
    <img
      src={AdjustingSize(person, thumbnailSize)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

function AdjustingTheSize() {
  return (
    <>
      <Avatar
        size={40}
        person={{ 
          name: 'Gregorio Y. Zara', 
          imageId: '7vQD0fP'
        }}
      />
      <Avatar
        size={120}
        person={{ 
          name: 'Gregorio Y. Zara', 
          imageId: '7vQD0fP'
        }}
      />
    </>
  );
}


export default AdjustingTheSize;