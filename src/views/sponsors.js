import React from 'react';
import PageHero from '../components/page-hero';
import '../assets/sass/sponsors.scss';

export default class Sponsors extends React.Component {

    render() {

        return (

            <div className="page-content sponsors">

                <PageHero bgVideo="pexels-yan-krukov-9071414.mp4">
                    <h1 className='page-hero-header'>Meet our <span className="text-yellow">Sponsors</span></h1>
                </PageHero>

                <section className="section-1">
                    <div className="layout-width">

                        <div className='grid-2-row headerXlWithParagraph'>
                            <h1 className='header-xl text-black has-underline underline-blue fit-content'>OUR SPONSORS</h1>
                            <p className='text-black f-32 fw-400'>
                            We work with a variety of sponsors who enables us to deliver and perform our obligations to the players and the users to redeem prizes that they have used to.
                            <br></br><br></br>
                            Below are our dear partner sponsors.
                            </p>
                        </div>

                    </div>
                </section>

                <section className="section-2">
                    <div className="layout-width ">
                        <div className="grid-3-col">
                            <img src={ process.env.PUBLIC_URL + "/assets/img/papaspizza.png" } alt="papaspizza" />
                            <img src={ process.env.PUBLIC_URL + "/assets/img/tampico.png" } alt="tampico" />
                            <img src={ process.env.PUBLIC_URL + "/assets/img/yango.png" } alt="yango" />
                        </div>
                        <div className="grid-3-col">
                            <img src={ process.env.PUBLIC_URL + "/assets/img/hisense.png" } alt="hisense" />
                            <img src={ process.env.PUBLIC_URL + "/assets/img/jigsaw.png" } alt="jigsaw" />
                            <img src={ process.env.PUBLIC_URL + "/assets/img/bolt.png" } alt="bolt" />
                        </div>
                    </div>
                </section>

            </div>

        );

    }

}