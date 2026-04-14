import React, { useContext } from 'react';
import { Cell, Legend, Pie, PieChart, Tooltip} from 'recharts';
import { TimelineContext } from '../Timeline/TimelineContext';

const AnalyticsPage = () => {
    const {activity} = useContext(TimelineContext);

    const count = {
        call: activity.filter(a =>a.type === "call").length,
        text: activity.filter(a =>a.type === "text").length,
        video: activity.filter(a =>a.type === "video").length

    }
    const data = [
        {name: "Call", value:count.call},
        {name:"Text", value:count.text},
        {name:"Video", value:count.video}
]

   const colors = ["#244D3F","#7ff55b","#9d5bf5"]
    return (
        <div className='w-11/12 mx-auto mt-10'>
            <div>
                <h1 className='font-bold text-[48px]'>Friendship Analytics</h1>
                <div className='shadow-lg p-8 w-10/12 mx-auto bg-base-100 rounded-lg'>
                <h1 className='text-left font-medium text-[20px] text-[#244D3F]'>By Interaction Type</h1>
                    <div className='flex justify-center'>
                        <PieChart className='pb-10' style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1, }} responsive>
      <Pie
        data={data}
        innerRadius="80%"
        outerRadius="100%"
        cornerRadius="50%"
        paddingAngle={5}
        dataKey="value"
        nameKey="name"
       
      >
        {data.map((_, index)=>(<Cell key={index} fill={colors[index]}></Cell>))}
        </Pie>
      <Tooltip></Tooltip>

      <Legend></Legend>
    </PieChart>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnalyticsPage;