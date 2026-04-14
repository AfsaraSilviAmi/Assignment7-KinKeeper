import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div>
            <div className='flex flex-col h-full justify-center items-center'>
                <h1>404</h1>
                <p>Page Can Not Be Found!</p>
                <Link to="/"><button>Go Home</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;