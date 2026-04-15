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
    const [search, setSearch] = useState("");
    const [sorted, setSorted] = useState(null);

    const handleFilter = (type) =>{
        setFilter(type);
    }
    const filterActivity = (filter ? activity.filter((item)=> item.type === filter): activity)

    const searchActivity = filterActivity.filter((item)=>{
        return (
            item.friendName.toLowerCase().includes(search.toLocaleLowerCase()) || item.type.toLowerCase().includes(search.toLowerCase())
        )
    })
    let sortedActivity = [...searchActivity];

    if(sorted === "newest"){
        sortedActivity.sort((a,b)=> b.timestamp - a.timestamp)
    }
    else if(sorted === "oldest"){
        sortedActivity.sort((a,b)=> a.timestamp - b.timestamp)
    }
    return (
        <div>
            <div className='w-11/12 mx-auto'>
                <h1 className='text-[48px] font-bold mt-5'>Timeline</h1>
                <div className='flex justify-between'>
                    <div className="dropdown dropdown-center">
  <div tabIndex={0} role="button" className="m-1 bg-base-300 py-2 px-6 text-[#64748B] rounded-md text-[18px] flex items-center gap-4">Filter timeline  <FaAngleDown></FaAngleDown></div>
  <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li onClick={()=>handleFilter("call")}><a>Call</a></li>
    <li onClick={()=>handleFilter("text")}><a>Text</a></li>
    <li onClick={()=>handleFilter("video")}><a>Video</a></li>
    <li onClick={()=>setSorted("newest")}><a>Newest</a></li>
    <li onClick={()=>setSorted("oldest")}><a>Oldest</a></li>
  </ul>
</div>
<div>
    <label className="input">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input type="search" required placeholder="Search by name or inte..." value={search} onChange={(e)=> setSearch(e.target.value)}/>
</label>
</div>
                </div>
                <div>
                    {
                    sortedActivity.length === 0?(<div className='flex justify-center items-center h-[40vh]'><p className='font-bold text-2xl'>No activity yet</p></div>): (sortedActivity.map((item, index)=>{return(
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