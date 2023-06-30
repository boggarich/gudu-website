import React from 'react';
import PageHero from '../components/page-hero';
import { Link } from 'react-router-dom';
import '../assets/sass/games.scss';
import VideoContainer from '../components/video-container';

export default class Games extends React.Component {

    render() {

        return (
            <div className="page-content games">

                <PageHero bgVideo="production ID-4568863.mp4">
                    <h1 className='page-hero-header'>Experience our reward-based <span className="text-yellow">games</span>.</h1>
                </PageHero>

                <section className='section-1'>
                    <div className='layout-width'>

                        <div className='d-flex justify-content-between flex-wrap'>
                            <h1 className='header-xl text-white has-underline underline-gradient'>Our Games</h1>
                        </div>

                        <div className='spacing'>
                            <div className='grid-2 column-gap-lg'>

                                <VideoContainer videoUrl="Crimerunner - Official Announcement Trailer.mp4" />

                                <div className='grid-3-row mt-5 headerLgWithParagraphWithButton'>

                                    <h1 className='header-lg text-white has-underline underline-gradient'>Gudu Run</h1>
                                    
                                    <div className="mt-0">
                                        <p className='text-white f-32 fw-500'>
                                        You are dropped on the street of Gudu. Surrounded by millions of coins, chased by 1000s of monsters who are there to kill you, eat up the coins and prevent you from surviving. You have to collect as many coins as you can. <br></br><br></br>
                                        </p>
                                        <ul>
                                            <li className='text-white f-32 fw-500'>Collect millions of coins from the street by running.</li>
                                            <li className='text-white f-32 fw-500'>Your coins collected are converted to Gudu Tokens, which is the in-game virtual currency.</li>
                                            <li className='text-white f-32 fw-500'>Visit the Gudu Marketplace and use your Gudu Tokens to redeem prizes from the market place.</li>
                                        </ul>
                                    </div>

                                    <div className='grid-2'>
                                        <Link to="">
                                            <img src={ process.env.PUBLIC_URL + 'assets/svg/AppStore.svg' } />
                                        </Link>
                                        <Link to="">
                                            <img src={ process.env.PUBLIC_URL + 'assets/svg/PlayStore.svg' } />
                                        </Link>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className='spacing'>
                            <div className='grid-2 column-gap-lg'>
                                <div className='grid-3-row mt-5 headerLgWithParagraphWithButton'>

                                    <h1 className='header-lg text-white has-underline underline-gradient'>Gudu FX</h1>
                                    <div className="mt-0">
                                        <p className='text-white f-32 fw-500'>
                                        Your car is racing through the street of Gudu. Surrounded by millions of coins, chased by 1000 of monsters who are there to kill you, eat up the coins and prevent you from surviving. You have to collect as many coins as you can <br></br><br></br>
                                        </p>
                                        <ul>
                                            <li className='text-white f-32 fw-500'>Collect millions of coins from the street by driving.</li>
                                            <li className='text-white f-32 fw-500'>Your coins collected are converted to Gudu Tokens, which is the in-game virtual currency.</li>
                                            <li className='text-white f-32 fw-500'>Visit the Gudu Marketplace and use your Gudu Tokens to redeem prizes from the market place.</li>
                                        </ul>
                                    </div>

                                    <div className='grid-2'>
                                        <Link to="">
                                            <img src={ process.env.PUBLIC_URL + 'assets/svg/AppStore.svg' } />
                                        </Link>
                                        <Link to="">
                                            <img src={ process.env.PUBLIC_URL + 'assets/svg/PlayStore.svg' } />
                                        </Link>
                                    </div>


                                </div>
                                
                                <VideoContainer videoUrl="Need for Speed Heat Official Launch Trailer.mp4" className="justify-self-lg-end"/>

                            </div>
                        </div>

                    </div>
                </section>

            </div>
        );

    }

}