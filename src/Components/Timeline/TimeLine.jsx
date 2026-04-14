import React, { useContext } from 'react';
import { TimelineContext } from './TimelineContext';
import callImg from '../../assets/call.png'
import textImg from "../../assets/text.png"
import videoImg from '../../assets/video.png'

const TimeLine = () => {

    const {activity} = useContext(TimelineContext);
    const getTimeline = (activityItem)=>{
        if(activityItem.type === "call"){
            return (
                <>
                <span className='font-bold'>Call <span className='font-normal'>with {activityItem.friendName}</span></span>
                </>
            )
        }
        else if(activityItem.type === "text"){
            return(<>
                <span className='font-bold'>Text <span className='font-normal'>with {activityItem.friendName}</span></span>
                </>)
        }
        else if(activityItem.type === "video"){
            return(<>
                <span className='font-bold'>Video <span className='font-normal'>with {activityItem.friendName}</span></span>
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
    return (
        <div>
            <div className='w-11/12 mx-auto'>
                <h1 className='text-[48px] font-bold'>Timeline</h1>
                <div className="dropdown dropdown-center">
  <div tabIndex={0} role="button" className="btn m-1">Click  ⬇️</div>
  <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>
                {
                    activity.length === 0?(<div><p>No activity yet</p></div>): (activity.map((item, index)=>{return(
                        <div key={index}>
                            <div className='flex'>
                               <img src={getImage(item.type)} alt="" />
                               <span> {getTimeline(item)}</span>
                               
                            </div>
                            <div>
                                {item.time}
                            </div>
                          
                        </div>)
                    }))
                }
            </div>

        </div>
    );
};

export default TimeLine;