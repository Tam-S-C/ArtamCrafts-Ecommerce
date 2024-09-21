import './FooterBar.css';
import imgReact from '../../assets/react.svg';
import instaIcon from '../../assets/imgIcons/Icono_Instagram.png';
import behanceIcon from '../../assets/imgIcons/Icono_Behance.png';
import youtubeIcon from '../../assets/imgIcons/Icono_YouTube.png';
import linkedinIcon from '../../assets/imgIcons/Icono_Linkedin.png';
import githubIcon from '../../assets/imgIcons/Icono_GitHub.png';
import mailIcon from '../../assets/imgIcons/Icono_mail.png';
import {memo} from 'react';



export default memo(function FooterBar() {
    return (
        <>
            <footer>
                <hr />
                <br />
                <p>ArTamCrafts® Copyrights 2019-2029 </p>
                <p style={{ fontWeight: "bold", fontFamily: "monospace", fontSize: 14 }}>
                    By Tamara S. Canzobre <br/>Realizado con React.js <img src={imgReact} width={16} />
                </p>
                <div className='iconosFooter'>
                    <a href="https://www.instagram.com/artamcrafts/" target="_blank" rel="noopener noreferrer">
                        <img src={instaIcon} width={24} alt="Link de Instagram" />
                    </a>

                    <a href="https://www.behance.net/tamaracanzobre" target="_blank" rel="noopener noreferrer">
                        <img src={behanceIcon} width={24} alt="Link de Behance" />
                    </a>

                    <a href="https://www.youtube.com/@artamcrafts" target="_blank" rel="noopener noreferrer">
                        <img src={youtubeIcon} width={24} alt="Link de YouTube" />
                    </a>

                    <a href="https://www.linkedin.com/in/tamara-canzobre/" target="_blank" rel="noopener noreferrer">
                        <img src={linkedinIcon} width={24} alt="Link de LinkedIn" />
                    </a>

                    <a href="https://github.com/Tam-S-C" target="_blank" rel="noopener noreferrer">
                        <img src={githubIcon} width={24} alt="Link a GitHub" />
                    </a>

                    <a href="mailto:artamcrafts@hotmail.com" target="_blank" rel="noopener noreferrer">
                        <img src={mailIcon} width={24} alt="Link del mail" />
                    </a>
                </div>
                <br />
            </footer>
            <br/>
        </>
    );
});