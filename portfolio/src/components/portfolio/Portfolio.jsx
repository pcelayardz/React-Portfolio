import React from 'react';
import SI from '../../assets/spaceInvaders.PNG'
import CALENDARIUM from '../../assets/calendarium.PNG'
import TICTACTOE from '../../assets/tictactoe.PNG'
import PORTFOLIO from '../../assets/portfolio.PNG'
import './portfolio.css'

const data = [
    {
        id: 1,
        image: SI,
        title: 'Space Invaders',
        github: 'https://github.com/pcelayardz/space-invaders',
        demo: 'https://pcelayardz.github.io/space-invaders/'
    },
    {
        id: 2,
        image: CALENDARIUM,
        title: 'Calendarium',
        github: 'https://github.com/pcelayardz/Calendarium',
        demo: 'https://pcelayardz.github.io/Calendarium/'
    },
    {
        id: 3,
        image: TICTACTOE,
        title: 'Tic-Tac-Toe',
        github: 'https://github.com/pcelayardz/Tic-Tac-Toe',
        demo: 'https://pcelayardz.github.io/Tic-Tac-Toe/'
    },
    {
        id: 4,
        image: PORTFOLIO,
        title: 'Portfolio',
        github: 'https://github.com/pcelayardz/React-portfolio ',
        demo: 'https://pcelayardz.github.io/Tic-Tac-Toe/'
    }
]

const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5 id='work'>My recent work</h5>
            <h2 id='port'>Portfolio</h2>
            <div className='container container__portfolio'>
                {
                    data.map(({ id, image, title, github, demo }) => {
                        return (
                            <article key={id} className='portfolio__item'>
                                <div className='portfolio__item-image'>
                                    <img src={image} alt={title}></img>
                                </div>
                                <h3 className='title-portfolio'>{title}</h3>
                                <div className='portfolio__item-btn'>
                                    <a href={github} className='btn btn-center' target='_blank' rel="noreferrer">Github</a>
                                    <a href={demo} className='btn btn-primary btn-center' target='_blank' rel="noreferrer">Live Demo</a>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    );
}

export default Portfolio;
