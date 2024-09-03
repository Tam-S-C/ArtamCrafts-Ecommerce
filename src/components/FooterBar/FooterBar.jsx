import React from 'react';
import './FooterBar.css';
import imgReact from '/src/assets/react.svg';

export default function FooterBar() {
  return (
    <>
      <footer>

        <hr/>
        <p>ArTamCrafts® Copyrights 2019-2029 </p>
        <p style={{fontWeight:"bold", fontFamily:"monospace", fontSize:14}}>By Tamara S. Canzobre - Realizado con React.js <img src={imgReact} width={16}/></p>
        <div className='iconosFooter'>
          <a href="https://www.instagram.com/artamcrafts/" target="_blank">
            <img src="../src/assets/Icono_Instagram.png" width={24} alt="Link de Instagram"/>
          </a>

          <a href="https://www.behance.net/tamaracanzobre" target="_blank">
            <img src="../src/assets/Icono_Behance.png" width={24} alt="Link de Behance"/>
          </a>

          <a href="https://www.youtube.com/@artamcrafts" target="_blank">
            <img src="../src/assets/Icono_Youtube.png" width={24} alt="Link de Youtube"/>
          </a>

          <a href="https://www.linkedin.com/in/tamara-canzobre/" target="_blank">
            <img src="../src/assets/Icono_Linkedin.png" width={24} alt="Link de LinkedIn"/>
          </a>

          <a href="https://github.com/Tam-S-C" target="_blank">
            <img src="../src/assets/Icono_GitHub.png" width={24} alt="Link a GitHub"/>
          </a>

          <a href="mailto:artamcrafts@hotmail.com" target="_blank">
            <img src="../src/assets/Icono_mail.png" width={24} alt="Link del mail"/>
          </a>

        </div>
      
      
      </footer>
    </>
  );
}
