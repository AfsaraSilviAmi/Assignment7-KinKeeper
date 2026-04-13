import React from 'react';
import Banner from './Banner';
import { useRouteLoaderData } from 'react-router';

const HomePage = () => {
    const friends = useRouteLoaderData("root");
    return (
        <div className='w-11/12 mx-auto'>
            <Banner friends = {friends}></Banner>
        </div>
    );
};

export default HomePage;