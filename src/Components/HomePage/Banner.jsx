import React from 'react';
import { FaPlus } from 'react-icons/fa';

const Banner = () => {
    return (
        <div>
            <div className='text-center mt-15 space-y-3.5'>
                <h1 className='text-[48px] font-bold'>Friends to keep close in your life</h1>
                <p className='text-[16px] text-[#64748B]'>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
relationships that matter most.</p>
<button className='btn bg-green-950 text-white mb-10'><FaPlus></FaPlus>Add a Friend</button>
            </div>
            <div className='grid grid-cols-4 text-center'>
                <div className='shadow-md'>
                    <h1>10</h1>
                    <p>Total Friends</p>
                </div>
                <div className='shadow-md'>
                    <h1>10</h1>
                    <p>Total Friends</p>
                </div>
                <div className='shadow-md'>
                    <h1>10</h1>
                    <p>Total Friends</p>
                </div>
                <div className='shadow-md'>
                    <h1>10</h1>
                    <p>Total Friends</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;