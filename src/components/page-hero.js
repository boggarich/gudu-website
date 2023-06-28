import React from 'react';
import commonJs from '../assets/js/common';

export default class PageHero extends React.Component {

    componentDidMount() {

        commonJs.setPageHeroHeight();

    }

    render() {

        return(
            <>

                <section className='page-hero clip-path-ellipse position-relative'>

                    
                        <div className='content'>
                            <video className='position-absolute top-0 w-100 h-100' src={ process.env.PUBLIC_URL + "/assets/video/" + this.props.bgVideo } autoPlay loop muted></video>

                            <div className='layout-width'>
                                <div className='d-flex align-items-center '>
                                    
                                { this.props.children }

                                </div>
                            </div>
                        </div>

                </section>

            </>
        );

    }
    
}