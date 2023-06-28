import React from 'react';
import PageHero from '../components/page-hero';
import ImgContainer from '../components/img-container';
import '../assets/sass/game-center.scss';

export default class Gamification extends React.Component {

    render() {

        return (

            <div className="page-content game-center">

                <svg viewBox="0 0 1 1" style={{ position: 'absolute' }}>
                    <path d="M0 49.9999C0 22.3857 22.3858 0 50 0H1462C1489.61 0 1512 22.3858 1512 50V1231.36C1512 1257.46 1491.93 1279.17 1465.91 1281.2L757.917 1336.69C755.31 1336.9 752.69 1336.9 750.083 1336.69L46.0727 1281.22C20.0622 1279.17 0 1257.47 0 1231.38V49.9999Z" fill="black"/>
                </svg>

                <PageHero bgVideo="production ID-4835515.mp4">
                    <h1 className='page-hero-header'>Hands - on with <span className='icon'><img src={ process.env.PUBLIC_URL + "/assets/img/GUDUlogo2.png" } /></span></h1>
                </PageHero>

                <section className="section-1">
                    <div className="layout-width">

                        <div className="grid-2">
                            <div className="grid-2-row fit-content">
                                <h1 className="header-lg text-white">Get a hands-on experience at of our <span className="text-yellow">Game Centers</span></h1>
                                <p className="f-24 fw-500 text-white">We have game centers all over the country, with amazing experiences awaiting the arrival of all our gamers. Get your game on, and compete in a wide range of games against other gamers live, in person.</p>
                            </div>
                            <ImgContainer alt="chairman" bgImg="game-center-img-1.png" hasNoPadding={ true } className="justify-self-lg-end" />

                        </div>

                    </div>
                </section>

            </div>

        );

    }

}