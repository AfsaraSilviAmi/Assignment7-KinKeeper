import React from 'react';
import { useLoaderData, useParams } from 'react-router';


const FriendDetails = () => {
    const {id} = useParams();
    const friends = useLoaderData();
    const friend = friends.find(f => f.id === Number(id))

    return (
        <div>
            <div>{friend.name}</div>
        </div>
    );
};

export default FriendDetails;