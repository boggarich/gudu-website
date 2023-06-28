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
                    <h1 className='page-hero-header'>Experience <span className='icon'><img src={ process.env.PUBLIC_URL + "/assets/img/GUDUlogo2.png" } /></span></h1>
                </PageHero>

                <section className='section-1'>
                    <div className='layout-width'>

                        <div className='d-flex justify-content-between flex-wrap'>
                            <h1 className='header-xl text-white has-underline underline-gradient'>Our Games</h1>
                        </div>

                        <div className='spacing'>
                            <div className='grid-2 column-gap-lg'>

                                <VideoContainer videoUrl="Crimerunner - Official Announcement Trailer.mp4" />

                                <div className='grid-3-row mt-5'>

                                    <h1 className='header-lg text-white has-underline underline-gradient'>Gudu Run</h1>
                                    <p className='text-white f-32 fw-500'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus gravida orci felis, vitae hendrerit lacus molestie eu. Integer quis turpis sed magna blandit sollicitudin. Proin non pharetra mauris. Cras eu metus lobortis, euismod mauris sit amet, dictum nunc. Vivamus ultrices nisl felis, sed posuere massa pretium at. Proin at risus non augue dignissim iaculis. Integer semper tellus a ipsum lacinia, vulputate tristique sapien facilisis. <br></br><br></br>

                                    Gudu run is an endless runner game available on mobile. Play our runner game, participate in our live contests and earn cash through Gudu coins.
                                    </p>

                                    <div className='d-flex w-100'>
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
                                <div className='grid-3-row mt-5'>

                                    <h1 className='header-lg text-white has-underline underline-gradient'>Gudu War</h1>
                                    <p className='text-white f-32 fw-500'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus gravida orci felis, vitae hendrerit lacus molestie eu. Integer quis turpis sed magna blandit sollicitudin. Proin non pharetra mauris. Cras eu metus lobortis, euismod mauris sit amet, dictum nunc. Vivamus ultrices nisl felis, sed posuere massa pretium at. Proin at risus non augue dignissim iaculis. Integer semper tellus a ipsum lacinia, vulputate tristique sapien facilisis.<br></br><br></br>

                                    Win territory and conquer in our modern warfare simulation game available on mobile. Play individual or co-op modes and have unlimited entertainment
                                    </p>
                                    <div className='d-flex w-100'>
                                        <Link to="">
                                            <img src={ process.env.PUBLIC_URL + 'assets/svg/AppStore.svg' } />
                                        </Link>
                                        <Link to="">
                                            <img src={ process.env.PUBLIC_URL + 'assets/svg/PlayStore.svg' } />
                                        </Link>
                                    </div>


                                </div>
                                
                                <VideoContainer videoUrl="Tom Clancys Ghost Recon Breakpoint- New Karambit Takedown.mp4" className="justify-self-lg-end"/>

                            </div>
                        </div>

                        <div className='spacing'>
                            <div className='grid-2 column-gap-lg'>
                                
                                <VideoContainer videoUrl="Need for Speed Heat Official Launch Trailer.mp4" />

                                <div className='grid-3-row mt-5'>

                                    <h1 className='header-lg text-white has-underline underline-gradient'>Gudu FX</h1>
                                    <p className='text-white f-32 fw-500'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus gravida orci felis, vitae hendrerit lacus molestie eu. Integer quis turpis sed magna blandit sollicitudin. Proin non pharetra mauris. Cras eu metus lobortis, euismod mauris sit amet, dictum nunc. Vivamus ultrices nisl felis, sed posuere massa pretium at. Proin at risus non augue dignissim iaculis. Integer semper tellus a ipsum lacinia, vulputate tristique sapien facilisis.<br></br><br></br>

                                    Earn your place on the tracks both in the streets and on the proffessional race tracks in Gudu FX. Gudu FX is available for all mobile devices
                                    </p>
                                    <div className='d-flex w-100'>
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
                                <div className='grid-3-row mt-5'>

                                    <h1 className='header-lg text-white has-underline underline-gradient'>Gudu Smash</h1>
                                    <p className='text-white f-32 fw-500'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus gravida orci felis, vitae hendrerit lacus molestie eu. Integer quis turpis sed magna blandit sollicitudin. Proin non pharetra mauris. Cras eu metus lobortis, euismod mauris sit amet, dictum nunc. Vivamus ultrices nisl felis, sed posuere massa pretium at. Proin at risus non augue dignissim iaculis. Integer semper tellus a ipsum lacinia, vulputate tristique sapien facilisis.<br></br><br></br>

                                    Smash viruses and earn rewards in our endless smash game. Interact with the world of virology and have fun. Gudu Smash is available on mobile. 
                                    </p>
                                    <div className='d-flex w-100'>
                                        <Link to="">
                                            <img src={ process.env.PUBLIC_URL + 'assets/svg/AppStore.svg' } />
                                        </Link>
                                        <Link to="">
                                            <img src={ process.env.PUBLIC_URL + 'assets/svg/PlayStore.svg' } />
                                        </Link>
                                    </div>

                                </div>
                                
                                <VideoContainer videoUrl="Cartoon Crush - Android Game Trailer - Eggs Portrait.mp4" className="justify-self-lg-end" />

                            </div>
                        </div>

                    </div>
                </section>

            </div>
        );

    }

}