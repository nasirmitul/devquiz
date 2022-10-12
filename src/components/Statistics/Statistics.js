import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { ResponsiveContainer, CartesianGrid, YAxis, Legend, Line, LineChart, Tooltip, XAxis } from 'recharts';



const Statistics = () => {
    const quizData = useLoaderData().data;
    console.log(quizData);
    console.log(quizData[0].total);

    const data = [
        {
          name: 'Page A',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Page B',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Page D',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Page E',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Page F',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Page G',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];


    return (
        
        <div className='chart'>

            <LineChart width={500} height={300} data={quizData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="total"stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>

        </div>
    );
};

export default Statistics;