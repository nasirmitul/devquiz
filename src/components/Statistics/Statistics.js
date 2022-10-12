import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { CartesianGrid, YAxis, Legend, Line, LineChart, Tooltip, XAxis } from 'recharts';



const Statistics = () => {
    const quizData = useLoaderData().data;

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