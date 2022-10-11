import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='error container'>
            <h1>Opps!</h1>
            <p className='not-found'>404 - PAGE NOT FOUND</p>
            
            <div className="redirect">
                <p>Go to</p>
                    <Link to='/'>Home</Link>
            </div>
            

        </div>
    );
};

export default Error;