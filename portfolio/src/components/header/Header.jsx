import React from 'react';
import CTA from './CTA';
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials';
import '../header/header.css'
const Header = () => {
    return (
        <header>
            <div className='container header__container'>
                <h5>Hello I'm</h5>
                <h1>Perla Celaya</h1>
                <h5 className='text-light'>Web Development Student</h5>
                <CTA></CTA>
                <HeaderSocials></HeaderSocials>
                <div className='me'>
                    <img src={ME} alt='me'></img>
                </div>
                <a href='#contact' className='scroll__down'>Scroll down</a>
            </div>
        </header>
    );
}

export default Header;
