import React, { createContext, useState } from 'react';

export const TimelineContext = createContext();

const TimelineProvider = ({children}) => {
    const [activity, setActivity] = useState([]);

    const addActivity = (communication) =>{
          setActivity(prev => [...prev, communication])
    }

    return (
        <div>
            <TimelineContext.Provider value={{addActivity, activity}}>
                {children}
            </TimelineContext.Provider>
        </div>
    );
};

export default TimelineProvider;