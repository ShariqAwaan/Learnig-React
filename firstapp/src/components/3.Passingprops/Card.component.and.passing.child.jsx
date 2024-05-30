// import React from 'react'

import Card from "./Card.component";

export default function PassingChild() {
  return (
    <div>
      <Card>
        <h1>Photo</h1>
        <img
          src="https://i.imgur.com/OKS67lhm.jpg"
          alt="Aklilu Lemma"
          width={100}
          height={100}
        />
      
        <h1>About</h1>
        <p>Aklilu Lemma was a distinguished Ethiopian scientist who discovered a natural treatment to schistosomiasis.</p>
      </Card>
    </div>
  );
}