import React from 'react';
import PageHero from '../components/page-hero';
import '../assets/sass/contact.scss';

export default class Contact extends React.Component {

    render() {

        return (

            <div className="page-content contact">

                <PageHero bgVideo="pexels-yan-krukov-9071414.mp4">
                    <h1 className='page-hero-header'>Contact</h1>
                </PageHero>

                <section className="section-1">
                    <div className="layout-width">
                        <div className="grid-2-col">

                            <div>
                                <h1 className='header-lg f-48 fw-600 text-black has-underline underline-blue fit-content'>How to find us</h1>
                                <br></br>
                                <div className="d-flex spacing">

                                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_187_244)">
                                        <path d="M42.4996 37.5H47.4996V42.5H42.4996V37.5ZM42.4996 27.5H47.4996V32.5H42.4996V27.5ZM42.4996 17.5H47.4996V22.5H42.4996V17.5ZM34.3496 17.5L37.4996 19.6V17.5H34.3496Z" fill="#3C49C0"/>
                                        <path d="M25 7.5V11.275L30 14.6V12.5H52.5V47.5H42.5V52.5H57.5V7.5H25Z" fill="#3C49C0"/>
                                        <path d="M20.425 14.25L37.5 25.625V52.5H2.5V26.2L20.425 14.25ZM25 47.5H32.5V27.9L20.425 20.225L7.5 28.45V47.5H15V32.5H25V47.5Z" fill="#3C49C0"/>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0_187_244">
                                        <rect width="60" height="60" fill="white"/>
                                        </clipPath>
                                        </defs>
                                    </svg>

                                    <div>
                                        <p className='f-24 fw-500 text-black mb-0'>Gudu Studios Ltd</p>
                                        <p className='f-24 fw-500 text-black mb-0'>20 1st Ringway Estate.</p>
                                        <p className='f-24 fw-500 text-black mb-0'>Osu, Accra.</p>
                                        <p className='f-24 fw-500 text-black mb-0'>Ghana, West Africa.</p>
                                    </div>

                                </div>
                                <br></br>
                                <div className="d-flex align-items-center">
                                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_187_258)">
                                        <path d="M55 15C55 12.25 52.75 10 50 10H10C7.25 10 5 12.25 5 15V45C5 47.75 7.25 50 10 50H50C52.75 50 55 47.75 55 45V15ZM50 15L30 27.5L10 15H50ZM50 45H10V20L30 32.5L50 20V45Z" fill="#3C49C0"/>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0_187_258">
                                        <rect width="60" height="60" fill="white"/>
                                        </clipPath>
                                        </defs>
                                    </svg>
                                    <p className='f-24 fw-400 text-black mb-0'><span className="fw-600">Email:</span> info@gudustudios.com </p>
                                </div>

                            </div>

                            <div>
                                <h1 className='header-lg f-48 fw-600 text-black has-underline underline-blue fit-content'>Send us a message</h1>
                                <br></br>
                                <div className='form-group'>
                                    <label>Name:</label>
                                    <input className='form-control w-45' placeholder="Enter your name" />
                                </div>
                                <div className='form-group'>
                                    <label>Email:</label>
                                    <input className='form-control w-60' placeholder="Enter your email" />
                                </div>
                                <div className='form-group'>
                                    <label>Message:</label>
                                    <textarea className='form-control' rows="5" placeholder="Type your message here..." />
                                </div>
                                <button className='btn btn-lg br-20 btn-black f-18'>Submit</button>

                            </div>
                        </div>
                    </div>
                </section>


            </div>

        );

    }

}