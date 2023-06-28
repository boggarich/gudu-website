import React from 'react';
import PageHero from '../../components/page-hero';
import ImgContainer from '../../components/img-container';
import '../../assets/sass/arena.scss';
import { NavLink, Outlet } from 'react-router-dom';

export default class Arena extends React.Component {

    render() {

        return(
            <div className='page-content arena bg-blue'>

                <PageHero bgVideo="pexels-yan-krukov-9071414.mp4">
                    <h1 className='page-hero-header'><span className='icon me-4'><img src={ process.env.PUBLIC_URL + "/assets/img/GUDUlogo2.png" } /></span>Arena</h1>
                </PageHero>

                <section className='section-2'>
                    <div className='layout-width'>
                        <div className='grid-2'>

                            <div className='grid-3-row align-self-center'>
                                <h1 className='header-xl text-white'>Start your own competition</h1>
                                <p className='text-white f-24 fw-500 mb-0'><span className='fw-700'>Do you want a challenge?</span> Start your own competition and challenge GUDU gamers to any of our games.</p>
                                <button className='btn btn-pill btn-yellow fw-600'>Start a competition</button>
                            </div>
 
                            <ImgContainer alt="chairman" bgImg="startConvo.png" hasNoPadding={ true } className="justify-self-lg-end" />
                            
                        </div>
                    </div>
                </section>

                <section className='section-3'>

                    <div className='layout-width'>
                        <h1 className='header-xl text-yellow fw-700'>Competitions</h1>
                        <ul className='page-sub-nav list-style-none d-flex justify-content-between'>
                            <li>
                                <NavLink to="/arena/gudu-run"><h1 className='f-32 fw-700 text-white'>Gudu Run</h1></NavLink>
                            </li>
                            <li>
                                <NavLink to="/arena/gudu-war"><h1 className='f-32 fw-700 text-white'>Gudu War</h1></NavLink>
                            </li>
                            <li>
                                <NavLink to="/arena/gudu-fx"><h1 className='f-32 fw-700 text-white'>Gudu FX</h1></NavLink>
                            </li>
                            <li>
                                <NavLink to="/arena/gudu-smash"><h1 className='f-32 fw-700 text-white'>Gudu Smash</h1></NavLink>
                            </li>
                        </ul>

                        <Outlet />
                        
                    </div>

                </section>

            </div>
        );

    }

}