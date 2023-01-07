import React from 'react';
import './footer.css'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import LOGO from '../../assets/logoPortfolioNoFondo.png'
const Footer = () => {
    return (
        <footer>
            <div className='container__footer'>
                    <a href='#/'><img src={LOGO} alt='logo' className='footer__logo'></img></a>


                <div className='footer__socials'>
                    <a href='https://www.linkedin.com/in/pcelayardz/' target='_blank' rel="noreferrer"><BsLinkedin /></a>
                    <a href='https://github.com/pcelayardz' target='_blank' rel="noreferrer"><FaGithub /></a>
                    <a href='https://github.com/AkaPerla' target='_blank' rel="noreferrer"><FaGithub /></a>
                </div>
            </div>

            <div className='footer__copyright'>
                <small className='smallCR'>&copy; Perla Celaya. All right reserved.</small>
            </div>
        </footer>
    );
}

export default Footer;
