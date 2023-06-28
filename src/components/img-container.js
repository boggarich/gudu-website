import React from 'react';

export default class extends React.Component {

    render() {

        return(
            <>
                <svg viewBox="0 0 1 1" height={0} width={0} style={{ position: 'absolute' }}>

                    <defs>

                        <clipPath id="image-container-mask" clipPathUnits="objectBoundingBox">

                            <path d="M0,0.084 C0,0.037,0.053,0,0.118,0 H0.882 C0.947,0,1,0.037,1,0.084 V0.83 C1,0.867,0.967,0.899,0.918,0.91 L0.536,0.996 C0.512,1,0.488,1,0.464,0.996 L0.082,0.91 C0.033,0.899,0,0.867,0,0.83 V0.084"></path>

                        </clipPath>

                    </defs>

                </svg>

                <div className={ `image-container ${ this.props.className ? this.props.className : "" }` }>
                    <div className={ `outer-container ${ this.props.hasNoPadding ? 'p-0' : '' } ` }>
                        <div className='overlay'></div>
                        <div className='inner-container'>
                            <img src={ process.env.PUBLIC_URL + "/assets/img/" + this.props.bgImg } alt={ this.props.alt } />
                        </div>
                    </div>
                </div>
                
            </>
        );

    }

}