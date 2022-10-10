import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../images/logo.png'

const Header = () => {
    const [responsive, setResponsive] = useState(false);

    let windowWidth = window.innerWidth;
    console.log(windowWidth);
    return (
        <div className='navbar'>
            <nav className='container nav'>
                <Link to='/'>
                    <div className="logo">
                        <img src={logo} />
                        <p className='site-name'>DevQuiz</p>
                    </div>
                </Link>

                <div className={`links ${(responsive) ? 'active' : undefined}`}>
                    <NavLink onClick={() => setResponsive(!responsive)} to='/home'>Home</NavLink>
                    <NavLink onClick={() => setResponsive(!responsive)} to='/statistics'>Statistics</NavLink>
                    <NavLink onClick={() => setResponsive(!responsive)} to='/blog'>Blog</NavLink>
                </div>
                <div className="hamburger" onClick={() => setResponsive(!responsive)}>
                    {
                        responsive? <i class="fa-solid fa-xmark"></i> : <i className="fa-solid fa-bars"></i>
                    }
                </div>
            </nav>
        </div>
    );
};

export default Header;