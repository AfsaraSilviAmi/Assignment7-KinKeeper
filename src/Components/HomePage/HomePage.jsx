import React, { useEffect, useState } from 'react';
import Banner from './Banner';


const HomePage = () => {
    const [friends, setFriends] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        fetch("friends.json").then((res)=>res.json()).then((data)=>{
            setFriends(data);
            setLoading(false);
        })
    }, []);

   

    return (
        <div className='w-11/12 mx-auto'>
            <Banner friends = {friends} loading={loading}></Banner>
        </div>
    );
};

export default HomePage;