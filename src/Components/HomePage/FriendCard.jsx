import React from 'react';
import { Link } from 'react-router';

const FriendCard = ({friend}) => {
    return (
        <div>
            <Link to={`/friendDetails/${friend.id}`} className="card bg-base-100 shadow-sm mb-3 gap-3">
  <figure>
    <img className='rounded-full'
      src={friend.picture}
      alt={friend.name} />
  </figure>
  <div className="card-body text-center">
    <h2 className="card-title justify-center">
     {friend.name}
     
    </h2>
    <p className='text-[#64748B]'>{friend.days_since_contact}d ago</p>
    <div>{
        friend.tags.map((tag, index) =><span key={index} className='badge badge-success badge-soft'>{tag}</span>)
        }</div>

        <div>
            {
                friend.status === "On-track" && <span className='badge bg-green-900 text-white rounded-2xl p-4'>On-Track</span>
            }
               { friend.status === "Almost due" && <span className='badge bg-yellow-500 text-white rounded-2xl p-4'>Almost Due</span>
                }
                {
                friend.status === "Overdue" && <span className='badge bg-red-500 text-white rounded-2xl p-4'>Overdue</span>


            }
        </div>
    
  </div>
</Link>
        </div>
    );
};

export default FriendCard;