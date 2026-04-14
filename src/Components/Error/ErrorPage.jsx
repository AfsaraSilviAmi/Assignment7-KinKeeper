import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div>
            <div className='flex flex-col h-screen justify-center items-center space-y-5'>
                <h1 className='text-8xl text-red-400 font-bold'>404</h1>
                <p className='text-2xl text-gray-500'>Page Can Not Be Found!</p>
                <Link to="/"><button className='btn btn-primary text-lg'>Go Home</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;