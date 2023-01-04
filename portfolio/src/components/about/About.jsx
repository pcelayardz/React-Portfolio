import React from 'react';
import './about.css'
import { VscCircleFilled } from 'react-icons/vsc'
const About = () => {
    return (
        <section id='about'>
            <h5 id='know'>Get To Know</h5>
            <h2 id='me'>About Me</h2>
            <div className='about__childhood'>
                <div className='about__icons'>
                    <VscCircleFilled />
                    <VscCircleFilled />
                    <VscCircleFilled />
                </div>

                <div className='about__card'>
                    <h3 id='title'>Childhood</h3>
                    <p>I grow up in a house full of electronic devices. I do not mean the ones you can buy in the stores,
                        I mean the devices my dad built. Since I was a child, I grew up looking at everything my dad did, and I told myself that's what I wanted to do in life,
                        but electronics weren't for me.</p>
                </div>
            </div>
            <div className='about__adulthood'>
                <div className='about__icons'>
                    <VscCircleFilled />
                    <VscCircleFilled />
                    <VscCircleFilled />
                </div>

                <div className='about__card'>
                    <h3 id='title'>Adulthood</h3>
                    <p>I tried studying electronics in university and even though it didn't displease me, I wasn't eager to work in that field. That is when I found 
                    out about web development. I searched and decided that was the path that I wanted. So I took the risk to leave university and study a 'Grado Superior' 
                    in web development. For me, it was the best decision.</p>
                </div>
            </div>
            <div className='about__hobbies'>
                <div className='about__icons'>
                    <VscCircleFilled />
                    <VscCircleFilled />
                    <VscCircleFilled />
                </div>

                <div className='about__card'>
                    <h3 id='title'>Hobbies</h3>
                    <p>I love reading, I try to read at least two chapters before bed, but sometimes I read a lot more than that.
                    I also enjoy amigurumi, which is the art of crocheting small stuffed toys. I have an  
                    <a href='https://www.instagram.com/fridas__crochet/' target="_blank"> Instragram</a>. Additionally, I love learning new things, such as programming languages,
                     or anything related to the front-end area and back-end as well. And last but not least, I love coffee.</p>
                </div>
            </div>
        </section>
    );
}

export default About;
