import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../images/logo.png'

const Header = () => {
    return (
        <div className='navbar'>
            <nav className='container nav'>
                <Link to='/'>
                    <div className="logo">
                        <img src={logo} />
                        <p className='site-name'>DevQuiz</p>
                    </div>
                </Link>

                <div className="links">
                    <NavLink to='/home'>Home</NavLink>
                    <NavLink to='/statistics'>Statistics</NavLink>
                    <NavLink to='/blog'>Blog</NavLink>
                </div>
            </nav>
        </div>
    );
};

export default Header;