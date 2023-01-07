import React from 'react';
import './nav.css'
import {BiHomeHeart,BiUser,BiBookHeart,BiFolderOpen} from 'react-icons/bi'
import {AiOutlineMessage} from 'react-icons/ai'
import { useState } from 'react';


const Nav = () => {

    const[activeNav, setActiveNav] = useState('/#')

    return (
        <nav>
            <a href='/' onClick={() => setActiveNav('/')} className={activeNav === '/' ? 'active' : ''}><BiHomeHeart/></a>
            <a href='#about' onClick={() => setActiveNav('#about')}  className={activeNav === '#about' ? 'active' : ''}><BiUser/></a>
            <a href='#experience' onClick={() => setActiveNav('#experience')}  className={activeNav === '#experience' ? 'active' : ''}><BiBookHeart/></a>
            <a href='#portfolio' onClick={() => setActiveNav('#portfolio')}  className={activeNav === '#portfolio' ? 'active' : ''}><BiFolderOpen/></a>
            <a href='#contact' onClick={() => setActiveNav('#contact')}  className={activeNav === '#contact' ? 'active' : ''}><AiOutlineMessage/></a>
        </nav>
    );
}

export default Nav;
