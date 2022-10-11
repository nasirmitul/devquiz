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
                        <h1>Attend to the quiz and check your knowledge on that topic</h1>
                        <p>The best way to ask questions, explore ideas, and let students show what they know. 
                        </p>

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