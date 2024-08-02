import React from 'react';
import './ItemListContainer.css';

export default function ItemListContainer({greeting}) {
  return (
    <>
      <main>
        <hr></hr>
        <h3>{greeting}</h3>
      </main>
    </>
  );
}
