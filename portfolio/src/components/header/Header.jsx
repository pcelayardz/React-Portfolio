import React from 'react';
import CTA from './CTA';
import IMAGE from '../../assets/imageHeader.gif'
// import LOGO from '../../assets/logoPortfolioNoFondo.png'
import HeaderSocials from './HeaderSocials';
import '../header/header.css'
const Header = () => {
    return (
        <header>
            {/* <div className='logo'>
                <img src={LOGO} alt='logo'></img>
            </div> */}
            <div className='container header__container'>
                <h5>Hello I'm</h5>
                <h1>Perla Celaya</h1>
                <h5 className='text-light desc'>I'm a second-year web development student. I want to specialize in front-end. 
                At the moment, I'm doing a course to learn React. </h5>
                <CTA></CTA>
                <HeaderSocials></HeaderSocials>
                <div className='me'>
                    <img src={IMAGE} alt='me'></img>
                </div>
                <a href='#contact' className='scroll__down'>Scroll down</a>
            </div>
        </header>
    );
}

export default Header;
