import React from 'react';
import '../assets/sass/home.scss';
import { Link } from 'react-router-dom';
import Slider from "react-slick";

const settingsPageHero = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 3000,
    easing: 'easeOutElastic'
  };

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
};

export default class Home extends React.Component {

    render() {

        return (
            <div className='page-content home'>

                <svg viewBox="0 0 1 1" height={0} width={0} style={{ position: 'absolute' }}>
                    <defs>

                        <clipPath id="mask" clipPathUnits="objectBoundingBox" >

                            <path id="Layer" class="s0" d="M0,0.012 C0,0.005,0.015,0,0.033,0 H0.967 C0.985,0,1,0.005,1,0.012 V0.947 C1,0.952,0.99,0.957,0.975,0.958 L0.507,1 C0.501,1,0.496,1,0.491,1 L0.025,0.958 C0.01,0.957,0,0.952,0,0.947 V0.012"/>

                        </clipPath>

                        <clipPath id="video-container-mask" clipPathUnits="objectBoundingBox">

                            <path d="M0,0.084 C0,0.037,0.053,0,0.118,0 H0.882 C0.947,0,1,0.037,1,0.084 V0.83 C1,0.867,0.967,0.899,0.918,0.91 L0.536,0.996 C0.512,1,0.488,1,0.464,0.996 L0.082,0.91 C0.033,0.899,0,0.867,0,0.83 V0.084"></path>

                        </clipPath>

                    </defs>
                </svg>

                <section className='page-hero clip-path-ellipse position-relative'>

                    
                    <div className='content'>
                        <video className='position-absolute top-0 w-100 h-100' src={ process.env.PUBLIC_URL + "/assets/video/video.mp4" } autoPlay loop muted></video>

                        <div className='layout-width'>
                                
                            <Slider {...settingsPageHero}>
                                <div className="w-100">
                                    <h1 className='page-hero-header'>We build <span className='text-yellow'>Games</span> everyone can enjoy</h1>
                                </div>
                                <div className="w-100">
                                    <h1 className='page-hero-header'>We build <span className='text-yellow'>Games</span> everyone can enjoy</h1>
                                </div>
                                <div className="w-100">
                                    <h1 className='page-hero-header'>We build <span className='text-yellow'>Games</span> everyone can enjoy</h1>
                                </div>
                            </Slider>

                        </div>

                    </div>

                </section>

                <section className='section-2'>

                    <div className='layout-width'>

                        <div className='grid-2-row headerXlWithParagraph'>
                            <h1 className='header-xl text-black has-underline underline-blue fit-content'>Welcome to GUDU</h1>
                            <p className='text-black f-32 fw-400'>
                            Africa is the fastest growing video game market in the world. We are committed to building a thriving gaming economy in Africa by building games everyone can enjoy and creating an avenue for engineering and entrepreneurial careers in the gaming industry.
                            </p>
                        </div>

                    </div>

                </section>

                <section className='section-3 bg-black bg-clip-badge'>
                    <div className='layout-width'>

                        <div className='d-flex justify-content-between flex-wrap'>
                            <h1 className='header-xl text-white has-underline underline-gradient'>Our Games</h1>
                            <Link to="/games" reloadDocument className="f-32 fw-700 text-gradient-fill mt-3">View All 
                                <span className='icon'>
                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M24.05 31.3666C23.7333 31.3666 23.4166 31.25 23.1666 31C22.6833 30.5166 22.6833 29.7166 23.1666 29.2333L32.4 20L23.1666 10.7666C22.6833 10.2833 22.6833 9.48328 23.1666 8.99995C23.65 8.51662 24.45 8.51662 24.9333 8.99995L35.05 19.1166C35.5333 19.6 35.5333 20.4 35.05 20.8833L24.9333 31C24.6833 31.25 24.3666 31.3666 24.05 31.3666Z" fill="#F8E930"/>
                                        <path d="M33.8833 21.25H5.83331C5.14998 21.25 4.58331 20.6833 4.58331 20C4.58331 19.3167 5.14998 18.75 5.83331 18.75H33.8833C34.5666 18.75 35.1333 19.3167 35.1333 20C35.1333 20.6833 34.5666 21.25 33.8833 21.25Z" fill="#F8E930"/>
                                    </svg>
                                </span>
                            </Link>
                        </div>

                        <div className='spacing'>
                            <div className='grid-2 column-gap-lg'>
                                <div className='video-container'>
                                    <div className='outer-container'>
                                        <div className='overlay'></div>
                                        <div className='inner-container'>
                                            <video src={ process.env.PUBLIC_URL + "/assets/video/Crimerunner - Official Announcement Trailer.mp4" } autoPlay loop muted />
                                        </div>
                                    </div>
                                </div>
                                <div className='grid-3-row mt-5 headerLgWithParagraphWithButton'>

                                    <h1 className='header-lg text-white has-underline underline-gradient'>Gudu Run</h1>
                                    <p className='text-white f-32 fw-500'>
                                    Gudu Run is an endless runner game available on mobile only. Players run through the streets collecting coins, avoiding obstacles and staying alive. Players use the coins collected to redeem real world products.
                                    </p>
                                    <button className='btn btn-outline-light btn-lg br-20 text-uppercase'>see more</button>

                                </div>
                            </div>
                        </div>

                        <div className='spacing'>
                            <div className='grid-2 column-gap-lg'>
                                <div className='grid-3-row mt-5 headerLgWithParagraphWithButton'>

                                    <h1 className='header-lg text-white has-underline underline-gradient'>Gudu FX</h1>
                                    <p className='text-white f-32 fw-500'>
                                    Gudu FX is an endless driver game available on mobile only. Players run through the streets collecting coins, dodging obstacles and avoiding crush. Players use the coins collected to redeem real world products.
                                    </p>
                                    <button className='btn btn-outline-light btn-lg br-20 text-uppercase'>see more</button>

                                </div>
                                <div className='video-container justify-self-lg-end'>
                                    <div className='outer-container'>
                                        <div className='overlay'></div>
                                        <div className='inner-container'>
                                            <video src={ process.env.PUBLIC_URL + "/assets/video/Need for Speed Heat Official Launch Trailer.mp4" } autoPlay loop muted />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                <section className='section-4'>

                    <div className='layout-width'>

                        <div className='grid-2-row headerXlWithParagraph'>

                            <div className='d-flex justify-content-between flex-wrap'>
                                <div className='d-flex'>
                                    <h1 className='header-xl text-black has-underline underline-blue fit-content'>
                                    Meet our Sponsors
                                    </h1>
                                    <span className='icon'>

                                        <svg width="62" height="68" viewBox="0 0 62 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M25.1605 40.3703C29.9154 35.2895 27.0588 34.7689 31.9686 37.1273L34.9404 38.5412C34.9498 38.5219 34.9825 38.5723 35.0017 38.5892C30.8862 38.5892 28.9355 41.9883 24.9147 41.9883C24.0859 41.9883 24.3013 41.9187 23.8181 41.8786L25.1605 40.3703ZM49.1465 15.8928C49.0077 13.122 47.3472 12.3438 48.068 11.5311C48.9059 10.5867 50.0064 11.0876 50.8777 11.6396C51.2037 11.8461 51.9775 12.275 52.4352 12.275C52.7356 12.275 53.0729 11.6974 53.2829 11.478C54.0221 10.705 55.0822 10.0071 55.2571 8.84679C55.4463 7.59133 55.4168 8.28493 56.1996 6.71959C57.264 4.59203 57.2188 3.06603 55.3703 1.33596C54.5128 0.533459 52.8791 0.104492 51.4486 0.104492C48.2441 0.104492 48.0518 4.35729 46.3461 5.41969C45.1437 6.16949 43.1046 4.52793 42.0332 4.03759C39.0724 2.68383 38.5829 2.78369 35.3607 2.37713C29.5846 1.64776 28.9237 0.339592 22.7678 2.67243C18.8017 4.17563 17.3441 6.23123 14.2945 7.46586C13.4185 7.82053 12.9604 8.14019 12.2271 8.68753C11.8717 8.95293 11.6452 9.15346 11.3043 9.40943C11.0534 9.59739 10.4416 9.89896 10.4416 10.1915C10.4416 10.8289 11.9416 10.2513 10.7074 11.2217C10.2533 11.5787 10.0858 12.1264 10.2222 12.7134C10.7857 12.7134 11.633 12.3894 11.4682 13.0712C11.3919 13.3866 10.8867 14.2485 11.7572 14.2485C12.1048 14.2485 13.1688 13.654 13.4051 13.4841C13.6804 13.2863 13.7964 13.0842 14.0378 12.9104C14.3838 12.6611 14.4781 12.7716 14.8273 12.6037C15.0868 13.1448 14.8108 14.3582 15.7045 14.3582C15.9861 14.3582 16.0152 13.8191 16.0655 13.5132C16.2055 12.6667 16.5704 11.6306 16.9447 10.8831C17.4818 9.81089 18.2689 9.06379 19.32 8.54439C20.5982 7.91213 23.2673 7.49693 24.8746 6.97199C26.5414 6.42743 27.0714 6.21669 28.6422 7.01249C29.0822 7.23546 29.4955 7.41789 30.0255 7.60269C30.5791 7.79536 30.9385 7.91369 31.5397 8.06196C33.4782 8.54049 32.5388 9.71416 31.9946 11.0215C31.7159 11.6908 31.4795 12.1909 31.1961 12.8546C30.5438 14.3829 28.2888 18.2893 27.191 19.3753C26.1663 20.3886 25.2848 20.7456 24.2416 21.5796C23.1328 22.4662 22.543 23.1189 21.7798 24.3803C19.6023 27.978 21.5301 30.108 19.3015 33.6341C18.0575 35.6025 17.2038 37.6408 16.4583 39.891C16.2554 40.504 16.0121 41.2346 15.7014 41.7658C14.5419 43.7502 13.8408 43.6689 12.443 44.9762L11.1254 46.2899C8.64008 49.0804 7.96024 52.6899 5.85388 55.2724C3.11881 58.6248 0.354675 58.2595 0.354675 60.1893C0.354675 61.9701 2.32221 62.7376 2.94191 64.29C3.37208 65.3673 3.40784 66.484 4.25518 67.2531C5.32938 68.2286 7.41608 67.8193 8.69121 67.7583C9.28141 67.73 9.89361 67.8157 9.89361 67.2063C9.89361 66.3802 9.37538 66.3346 8.90394 66.0035C7.89698 65.2966 7.72594 64.1398 7.51084 63.0105C7.12118 60.9671 6.76771 60.4835 8.28111 58.6866C9.80434 56.8783 11.6508 55.3157 13.1579 53.4759C15.5049 50.6099 13.785 51.6035 17.6509 47.7723C18.074 47.3535 18.954 46.4963 19.1038 45.9357H19.3228C19.3499 46.2593 19.4962 46.7063 19.5166 46.9489C19.5504 47.3476 19.4325 47.4809 19.4325 48.0188C19.4325 50.2034 19.6137 51.5749 20.4037 53.5169C20.6152 54.0375 20.7992 54.7369 21.503 54.4908C21.9426 54.3367 22.094 53.9494 22.1612 53.4886C22.357 52.1446 22.7644 51.1054 23.0738 49.7961C23.2107 49.2181 23.3015 48.4521 23.4737 47.8938C24.5448 44.4262 28.5785 45.2114 32.0355 44.9429C32.6772 44.8929 33.4148 44.7848 34.1151 44.7195C36.3052 44.5166 39.6619 43.8136 41.6609 43.0555C43.3748 42.406 43.7735 41.6699 43.7735 39.9053C43.7735 37.9377 40.1066 32.6064 38.6962 30.9479C35.6324 27.3439 33.5308 27.1705 35.6922 25.3547C36.0885 25.0217 36.4727 24.7393 36.8659 24.4452L43.0693 19.9038C43.4437 19.6345 43.8978 19.1859 44.3217 19.073C45.4324 21.1719 46.5055 24.1999 48.4412 25.6983C48.8784 26.0373 49.2893 26.6381 49.9137 26.6381C50.7992 26.6381 53.1638 25.2678 53.8606 24.7739C55.3457 23.7213 57.0128 22.287 58.137 20.8274C59.1353 19.5311 60.1922 18.2607 61.1178 16.9006C61.349 16.5613 61.452 16.4783 61.6454 16.1123C61.4127 15.6727 60.3192 14.1388 59.7813 14.1388C59.2835 14.1388 59.2281 14.9358 58.137 14.3582C57.905 14.7962 57.7064 15.1068 57.6931 15.7784C57.6801 16.4335 57.7847 16.9965 57.5409 17.4904C56.6645 19.2656 53.0636 21.9236 51.0099 21.9236C50.3207 21.9236 50.2169 21.3818 50.1319 20.8278C49.9703 19.7729 49.4749 18.7612 49.2842 17.7286C49.1482 16.9922 49.1871 16.7016 49.1466 15.8928H49.1465Z" fill="black"/>
                                        </svg>

                                    </span>
                                </div>
                                <Link to="/sponsors" reloadDocument className="f-32 fw-700 link-primary mt-3">See All 
                                    <span className='icon ml-0'>
                                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M24.05 31.3666C23.7333 31.3666 23.4166 31.25 23.1666 31C22.6833 30.5166 22.6833 29.7166 23.1666 29.2333L32.4 20L23.1666 10.7666C22.6833 10.2833 22.6833 9.48328 23.1666 8.99995C23.65 8.51662 24.45 8.51662 24.9333 8.99995L35.05 19.1166C35.5333 19.6 35.5333 20.4 35.05 20.8833L24.9333 31C24.6833 31.25 24.3666 31.3666 24.05 31.3666Z" fill="#F8E930"/>
                                            <path d="M33.8833 21.25H5.83331C5.14998 21.25 4.58331 20.6833 4.58331 20C4.58331 19.3167 5.14998 18.75 5.83331 18.75H33.8833C34.5666 18.75 35.1333 19.3167 35.1333 20C35.1333 20.6833 34.5666 21.25 33.8833 21.25Z" fill="#F8E930"/>
                                        </svg>
                                    </span>
                                </Link>
                            </div>

                            <Slider {...settings}>

                                <div><img src={ process.env.PUBLIC_URL + "/assets/img/papaspizza.png" } alt="papaspizza" /></div>
                                <div><img src={ process.env.PUBLIC_URL + "/assets/img/tampico.png" } alt="tampico" /></div>
                                <div><img src={ process.env.PUBLIC_URL + "/assets/img/bolt.png" } alt="bolt" /></div>
                                <div><img src={ process.env.PUBLIC_URL + "/assets/img/yango.png" } alt="yango" /></div>

                            </Slider>
                            
                        </div>

                    </div>

                </section>
     
            </div>

        )

    }

}