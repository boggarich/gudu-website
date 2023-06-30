import React from 'react';
import PageHero from '../components/page-hero';
import ImgContainer from '../components/img-container';
import '../assets/sass/our-vision.scss';

export default class OurVision extends React.Component {

    render() {

        return(
            <div className='page-content our-vision'>

                <PageHero bgVideo="pexels-rodnae-productions-7914851.mp4">
                    <h1 className='page-hero-header'>This is our <span className="text-yellow">Vision</span></h1>
                </PageHero>

                <section className='section-2'>

                    <div className='layout-width'>
                 
                        <div className='grid-2-row headerXlWithParagraph'>
                            <h1 className='header-xl text-black has-underline underline-blue fit-content'>Our Vision</h1>
                            <p className='text-black f-32 fw-400'>
                            Africa is the fastest growing video game market in the world. We are committed to building a thriving gaming economy in Africa by creating games everyone can enjoy and laying a foundation to propagate engineering and entrepreneurial careers in the gaming industry.
                            </p>
                        </div>

                    </div>

                </section>

                <section className='section-3'>
                    <div className='layout-width'>

                        <div className="spacing">
                            <div className='grid-2'>

                                
                                <div className='grid-2-row headerLgWithParagraph'>

                                    <div className=''>
                                        <h1 className='header-lg fw-400 text-black has-underline underline-blue'>Stage 1 – Games Everyone Loves</h1>
                                    </div>

                                    <p className='f-36 fw-400'>
                                    Create reward-based games that are collaborative, competitive, adventurous and entertaining that everyone can easily play from anywhere.
                                    </p>

                                </div>
    
                                <ImgContainer alt="chairman" bgImg="womenOnMotoCycle.png" hasNoPadding={ true } className="justify-self-lg-end" />
                                
                            </div>
                        </div>

                        <div className="spacing">
                            <div className='grid-2'>

                                <ImgContainer alt="chairman" bgImg="boyPlayingGame.png" hasNoPadding={ true } className="" />

                                <div className='grid-2-row headerLgWithParagraph'>

                                    <div className=''>
                                        <h1 className='header-lg fw-400 text-black has-underline underline-blue'>Stage 2 – Digital Personification</h1>
                                    </div>

                                    <p className='f-36 fw-400'>
                                    Scale from reward-based games to creating a digital personification platform where player immense themselves in our games to get a real game experience.
                                    </p>

                                </div>
                                
                            </div>
                        </div>

                        <div className="spacing">
                            <div className='grid-2'>

                                
                                <div className='grid-2-row headerLgWithParagraph'>

                                    <div className=''>
                                        <h1 className='header-lg fw-400 text-black has-underline underline-blue'>Stage 3 – Alternate Universe</h1>
                                    </div>

                                    <p className='f-36 fw-400'>
                                    Leverage on our digital personification platform to creating a digital universal platform where players live, work, trade, socialize, engage with their digital personalities.
                                    </p>

                                </div>
    
                                <ImgContainer alt="chairman" bgImg="startConvo.png" hasNoPadding={ true } className="justify-self-lg-end" />
                                
                            </div>
                        </div>

                    </div>
                </section>

            </div>
        );

    }

}

