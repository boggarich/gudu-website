import React from 'react';
import '../assets/sass/footer.scss';
import { Link } from 'react-router-dom';

export default class Footer extends React.Component {

    render() {

        return(

            <footer className='bg-black'>

                <div className='layout-width'>

                    <div className='grid-3-col'>
                        <img src={ process.env.PUBLIC_URL + '/assets/img/GUDUlogo3.png' } alt="gudu logo" className='footer-logo' />
                        <ul>
                            <li className='f-32 fw-600 text-white'><Link to="/about" reloadDocument>About</Link></li>
                            <li className='f-32 fw-600 text-white'><Link to="/games" reloadDocument>Games</Link></li>
                            <li className='f-32 fw-600 text-white'><Link to="/contact">Contact</Link></li>
                        </ul>
                        <div>
                            <h4 className='f-32 fw-600 text-yellow'>Follow us on:</h4>
                            <div className='d-flex social-media-handles'>
                                <a href=""><img src={ process.env.PUBLIC_URL + "/assets/svg/twitter1.svg" } alt="twitter logo" /></a>
                                <a href=""><img src={ process.env.PUBLIC_URL + "/assets/svg/instagram1.svg" } alt="instagram logo" /></a>
                                <a href=""><img src={ process.env.PUBLIC_URL + "/assets/svg/facebook1.svg" } alt="facebook logo" /></a>
                            </div>
                        </div>
                    </div>

                    <p className='text-center text-white fw-400 f-20 mb-5'>
                        <span className='me-3'>
                            
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z" fill="white"/>
                                <path d="M12.2402 16.75C9.62023 16.75 7.49023 14.62 7.49023 12C7.49023 9.38 9.62023 7.25 12.2402 7.25C13.3902 7.25 14.5102 7.67 15.3702 8.44C15.6802 8.71 15.7102 9.19 15.4402 9.5C15.1702 9.81 14.6902 9.84001 14.3802 9.57001C13.7902 9.05001 13.0302 8.76001 12.2402 8.76001C10.4502 8.76001 8.99023 10.22 8.99023 12.01C8.99023 13.8 10.4502 15.26 12.2402 15.26C13.0202 15.26 13.7902 14.97 14.3802 14.45C14.6902 14.18 15.1702 14.21 15.4402 14.52C15.7102 14.83 15.6802 15.31 15.3702 15.58C14.5002 16.33 13.3902 16.75 12.2402 16.75Z" fill="white"/>
                            </svg>

                        </span>
                        2022 Gudu Studios Limited. All rights reserved
                    </p>

                    <div className='d-flex justify-content-center w-100'>
                        <Link className='text-white text-underline'>Privacy Notice</Link>
                        <Link className='text-white text-underline ms-5'>Terms of Service</Link>
                        <Link className='text-white text-underline ms-5'>Code of conduct</Link>
                    </div>

                </div>
                
            </footer>

        );

    }

}