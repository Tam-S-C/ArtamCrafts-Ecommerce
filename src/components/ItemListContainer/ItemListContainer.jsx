import React from 'react';
import './ItemListContainer.css';

export default function ItemListContainer({greeting}) {

  return (
    <>
      <main>
        <hr></hr>
        <br></br>
        <h1 style={{fontFamily:"monospace", fontStyle:"italic"}}>{greeting}</h1>
        <h3>🚧 Web en construcción 🚧</h3>
        <p>Disculpe las molestas.</p>
      </main>
    </>
  );
}
