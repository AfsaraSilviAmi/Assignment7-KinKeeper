import React, { useContext, useState } from 'react';
import { TimelineContext } from './TimelineContext';
import callImg from '../../assets/call.png'
import textImg from "../../assets/text.png"
import videoImg from '../../assets/video.png'
import { FaAngleDown } from 'react-icons/fa';

const TimeLine = () => {

    const {activity} = useContext(TimelineContext);
    const getTimeline = (activityItem)=>{
        if(activityItem.type === "call"){
            return (
                <>
                <span className='font-medium text-[20px] text-[#244D3F]'>Call <span className='font-normal text-[18px] text-[#64748B]'>with {activityItem.friendName}</span></span>
                </>
            )
        }
        else if(activityItem.type === "text"){
            return(<>
                <span className='font-medium text-[20px] text-[#244D3F]'>Text <span className='font-normal text-[18px] text-[#64748B]'>with {activityItem.friendName}</span></span>
                </>)
        }
        else if(activityItem.type === "video"){
            return(<>
                <span className='font-medium text-[20px] text-[#244D3F]'>Video <span className='font-normal text-[18px] text-[#64748B]'>with {activityItem.friendName}</span></span>
                </>)
        }
    }

    const getImage = (type) =>{
        if(type === "call"){
            return(`${callImg}`)
        }
        else if(type === "text"){
            return(`${textImg}`)
        }
        else if(type === "video"){
            return(`${videoImg}`)
        }

    }

    const [filter, setFilter] = useState(null);

    const handleFilter = (type) =>{
        setFilter(type);
    }
    const filterActivity = (filter ? activity.filter((item)=> item.type === filter): activity)
    return (
        <div>
            <div className='w-11/12 mx-auto'>
                <h1 className='text-[48px] font-bold mt-5'>Timeline</h1>
                <div className="dropdown dropdown-center">
  <div tabIndex={0} role="button" className="m-1 bg-base-300 py-2 px-6 text-[#64748B] rounded-md text-[18px] flex items-center gap-4">Filter timeline  <FaAngleDown></FaAngleDown></div>
  <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li onClick={()=>handleFilter("call")}><a>Call</a></li>
    <li onClick={()=>handleFilter("text")}><a>Text</a></li>
    <li onClick={()=>handleFilter("video")}><a>Video</a></li>
  </ul>
</div>
                <div>
                    {
                    filterActivity.length === 0?(<div><p>No activity yet</p></div>): (filterActivity.map((item, index)=>{return(
                        <div key={index} className='shadow-sm p-4 my-3'>
                            <div className='flex gap-2'>
                               <img src={getImage(item.type)} alt="" className='h-10 ' />
                               <span> {getTimeline(item)}
                                     <div className='text-[16px] text-[#64748B]'>
                                {item.time}
                            </div>
                               </span>
                               
                            </div>
                            
                          
                        </div>)
                    }))
                }
                </div>
            </div>

        </div>
    );
};

export default TimeLine;