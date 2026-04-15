import React, { useContext } from 'react';
import { FiArchive, FiPhoneCall } from 'react-icons/fi';
import { GoDeviceCameraVideo } from 'react-icons/go';
import { MdOutlineTextsms } from 'react-icons/md';
import { RiDeleteBin6Line, RiNotificationSnoozeLine } from 'react-icons/ri';
import { useLoaderData, useParams } from 'react-router';
import { TimelineContext } from '../Timeline/TimelineContext';
import { toast } from 'react-toastify';



const FriendDetails = () => {
    const {id} = useParams();
    const friends = useLoaderData();
    const friend = friends.find(f => f.id === Number(id))

    const {addActivity} = useContext(TimelineContext);

    return (
        <div className='w-10/12 mx-auto mt-10'>
           
            <div className='grid md:grid-cols-3 gap-4'>
                 {/* card */}
                <div className='col-span-1'>
                    <div className='card bg-base-100 shadow-sm'>
                <figure>
    <img className='rounded-full pt-2'
      src={friend.picture}
      alt={friend.name} />
  </figure>
  <div className="card-body text-center">
    <h2 className="card-title justify-center">
     {friend.name}
     
    </h2>
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
    <div>{
        friend.tags.map((tag, index) =><span key={index} className='badge badge-success badge-soft'>{tag}</span>)
        }</div>

        <p className='text-[#64748B] italic text-[16px]'>"{friend.bio}"</p>
        <p className='text-[#64748B] text-[14px]'>Preferred: {friend.email}</p>
    
  </div>
            </div>

            {/* snooze */}
            <div className='grid gap-2'>
                <button className='btn text-[16px]'><RiNotificationSnoozeLine />Snooze 2 Weeks</button>
                <button className='btn text-[16px]'><FiArchive></FiArchive> Archive</button>
                <button className='btn text-[16px] text-red-500'><RiDeleteBin6Line /> Delete</button>
            </div>
                </div>
                {/* left end */}
           <div className='col-span-2'>
             <div className='md:flex gap-4 text-center'>
                <div className='shadow-sm p-4 w-60'>
                    <h1 className='font-semibold text-[30px] text-[#244D3F]'>{friend.days_since_contact}</h1>
                    <p className='text-[18px] text-[#64748B]'>Days Since Contact</p>
                </div>
                <div className='shadow-sm p-4 w-60 h-30'>
                    <h1 className='font-semibold text-[30px] text-[#244D3F]'>{friend.goal}</h1>
                    <p className='text-[18px] text-[#64748B]'>Goal (Days)</p>
                </div>
                <div className='shadow-sm p-4 w-60'>
                    <h1 className='font-semibold text-[30px] text-[#244D3F]'>{friend.next_due_date}</h1>
                    <p className='text-[18px] text-[#64748B]'>Next Due</p>
                </div>
            </div>
            <div className='md:flex justify-between p-6 shadow-sm mt-6'>
                <div className='space-y-3'>
                    <h1 className='text-[20px] text-[#244D3F]'>Relationship Goal</h1>
                    <p className='text-[18px] text-[#64748B]'>Connect every <span className='text-black'>{friend.goal} days</span></p>
                </div>
                <div>
                    <button className='btn'>Edit</button>
                </div>
            </div>
            <div className='shadow-sm mt-6 p-6'>
                <h1 className='text-[#244D3F] text-[20px]'>Quick Check-in</h1>
                <div className='md:flex gap-4 mt-4'>
                    <button onClick={()=> {addActivity({type: "call", friendName: friend.name, time: new Date().toDateString(), timestamp: Date.now()}); toast.success(`You Called ${friend.name}`)}} className='btn flex flex-col items-center justify-center gap-2 w-60 h-25'><FiPhoneCall className='text-2xl' />Call</button>
                    <button onClick={()=> {addActivity({type: "text", friendName: friend.name, time: new Date().toDateString(), timestamp: Date.now()}); toast.success(`You Texted ${friend.name}`)}} className='btn flex flex-col items-center justify-center gap-2 w-60 h-25'><MdOutlineTextsms className='text-2xl' />Text</button>
                    <button onClick={()=> {addActivity({type: "video", friendName: friend.name, time: new Date().toDateString(), timestamp: Date.now()}); toast.success(`You Video called ${friend.name}`)}} className='btn flex flex-col items-center justify-center gap-2 w-60 h-25'><GoDeviceCameraVideo className='text-2xl' />Video</button>
                </div>
            </div>
           </div>
            </div>


        </div>
    );
};

export default FriendDetails;