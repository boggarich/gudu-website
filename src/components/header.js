import React from 'react';
import '../assets/sass/header.scss';
import { NavLink, Link } from 'react-router-dom';
import $ from 'jquery';

export default class Header extends React.Component {

    toggleMobileNav = () => {

        $('.mobile-nav').slideToggle();

    }

    componentDidMount() {

        $('.toggle-mobile-nav-btn').on('click', this.toggleMobileNav );

    }

    render() {

        return(
            <header>
                <div className="layout-width d-flex justify-content-between align-items-center">
                    <Link to="/" reloadDocument><img src={ process.env.PUBLIC_URL + '/assets/img/GUDUlogo1.png' } /></Link>

                    <nav className='align-items-center'>

                        <ul className="d-inline-flex align-items-center mb-0">
                            
                            <li>
                                <NavLink to="/" className={({ isActive, isPending }) => {
                                    return isActive ? "active" : isPending ? "pending" : "";
                                }} reloadDocument>
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/about" className={({ isActive, isPending }) => {
                                    return isActive ? "active" : isPending ? "pending" : "";
                                }} reloadDocument>
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/our-vision" className={({ isActive, isPending }) => {
                                    return isActive ? "active" : isPending ? "pending" : "";
                                }} reloadDocument>
                                    Our Vision
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/games" className={({ isActive, isPending }) => {
                                    return isActive ? "active" : isPending ? "pending" : "";
                                }} reloadDocument>
                                    Games
                                </NavLink>
                            </li>
                            <li><NavLink to="/sponsors" reloadDocument>Sponsors</NavLink></li>
                            <li><NavLink to="/contact" reloadDocument>Contact</NavLink></li>
                        </ul>

                    </nav>

                    <button className='toggle-mobile-nav-btn'>
                        <img src={ process.env.PUBLIC_URL + "/assets/img/hamburger-menu-white.png" } />
                    </button>

                    <nav className='mobile-nav align-items-center'>

                        <ul className="d-inline-flex mb-0">
                            <li>
                                <NavLink to="/" className={({ isActive, isPending }) => {
                                    return isActive ? "active" : isPending ? "pending" : "";
                                }} reloadDocument>
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/about" className={({ isActive, isPending }) => {
                                    return isActive ? "active" : isPending ? "pending" : "";
                                }} reloadDocument>
                                    About
                                </NavLink>
                            </li>
                            <li><NavLink to="/our-vision" reloadDocument>Our Vision</NavLink></li>
                            <li><NavLink to="/games" reloadDocument>Games</NavLink></li>
                            <li><NavLink to="/sponsors" reloadDocument>Sponsors</NavLink></li>
                            <li><NavLink to="/contact" reloadDocument>Contact</NavLink></li>
                        </ul>

                    </nav>

                </div>
            </header>
        );

    }

}