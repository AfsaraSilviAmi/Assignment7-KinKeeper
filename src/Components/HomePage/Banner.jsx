import React from 'react';
import { FaPlus } from 'react-icons/fa';

const Banner = ({friends}) => {
    return (
        <div>
            <div className='text-center mt-15 space-y-3.5'>
                <h1 className='text-[48px] font-bold'>Friends to keep close in your life</h1>
                <p className='text-[16px] text-[#64748B]'>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
relationships that matter most.</p>
<button className='btn bg-green-950 text-white mb-8'><FaPlus></FaPlus>Add a Friend</button>
            </div>
            <div className='grid grid-cols-4 text-center'>
                <div className='shadow-md w-50 mx-auto py-5'>
                    <h1 className='font-semibold text-[32px]'>{friends.length}</h1>
                    <p className='text-[18px] text-[#64748B]'>Total Friends</p>
                </div>
                <div className='shadow-md w-50 mx-auto py-5'>
                    <h1 className='font-semibold text-[32px]'>10</h1>
                    <p className='text-[18px] text-[#64748B]'>On Track</p>
                </div>
                <div className='shadow-md w-50  mx-auto py-5'>
                    <h1 className='font-semibold text-[32px]'>10</h1>
                    <p className='text-[18px] text-[#64748B]'>Needs Attention</p>
                </div>
                <div className='shadow-md w-50 mx-auto py-5'>
                    <h1 className='font-semibold text-[32px]'>10</h1>
                    <p className='text-[18px] text-[#64748B]'>Interactions This Month</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;