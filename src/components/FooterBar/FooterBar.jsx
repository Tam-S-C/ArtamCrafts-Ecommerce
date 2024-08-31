import React from 'react';
import './FooterBar.css';
import imgReact from '/src/assets/react.svg';

export default function FooterBar() {
  return (
    <>
      <footer>
        <hr></hr>
        <p>ArTamCrafts® Copyrights 2019-2029</p>
        <p style={{fontWeight:"bold", fontFamily:"monospace", fontSize:14}}>By Tamara S. Canzobre</p>
        <p>Realizado con React.js <img src={imgReact} width={15}/></p>
      </footer>
    </>
  );
}
