import React from 'react';
import './experience.css'
import {BsPatchCheck} from 'react-icons/bs'
const Experience = () => {
    return (
        <section id='experience'>
            <h5 id='level'>My technical level</h5>
            <h2 id='skills'>Skills</h2>

            <div className='cotainer experience__container'>
                <div className='experience__frontend'>
                    <h3>Front-end Deveopment</h3>
                    <div className='experience__content'>
                        <article className='experience__details'>
                            <BsPatchCheck className='experience__details-icon'/>
                            <h4>HTML</h4>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheck className='experience__details-icon'/>
                            <h4>CSS</h4>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheck className='experience__details-icon'/>
                            <h4>Bootstrap</h4>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheck className='experience__details-icon'/>
                            <h4>Javascript</h4>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheck className='experience__details-icon'/>
                            <h4>React</h4>
                        </article>
                    </div>  
                </div>
                <div className='experience__backend'>
                    <h3>Back-end Deveopment</h3>
                    <div className='experience__content'>
                        <article className='experience__details'>
                            <BsPatchCheck className='experience__details-icon'/>
                            <h4>Python</h4>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheck className='experience__details-icon'/>
                            <h4>MySQL</h4>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheck className='experience__details-icon'/>
                            <h4>Django</h4>
                        </article>
                    </div>  
                </div>
                <div className='experience__others'>
                    <h3>Others</h3>
                    <div className='experience__content'>
                        <article className='experience__details'>
                            <BsPatchCheck className='experience__details-icon'/>
                            <h4>Git</h4>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheck className='experience__details-icon'/>
                            <h4>Canva</h4>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheck className='experience__details-icon'/>
                            <h4>Figma</h4>
                        </article>
                    </div>  
                </div>
            </div>
        </section>
    );
}

export default Experience;
