import React from 'react';
import { Link } from 'react-router-dom';
import hero from '../../images/header-image.png'

const HeroSection = () => {

    /* let circleOne = window.innerWidth;
    style={{height: circleOne, width: circleOne}} */

    return (
        <div className='hero container'>
            <div className="main-layout">
                <div className="main-left">
                    <div className="left-content">
                        <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae quisquam consequatur voluptatum qui quasi debitis eos? Consequatur dicta maxime in!</p>

                        <button>
                            <Link to='/blog'>Check Blogs</Link>
                        </button>

                    </div>

                </div>
                <div className="main-right">
                    <img src={hero} alt="" />
                </div>
            </div>
        </div>
    );
};

export default HeroSection;