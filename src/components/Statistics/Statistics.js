import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from "recharts";

const data = [
    {
        name: "Page A",
        pv: 2400,
    },
    {
        name: "Page B",
        pv: 1398,
    },
    {
        name: "Page C",
        pv: 9800,
    },
    {
        name: "Page D",
        pv: 3908,
    },
];


const Statistics = () => {
    const [quizData, setQuizData] = useState([]);
    useEffect(() => {
        axios.get('https://openapi.programming-hero.com/api/quiz')
            .then(data => {
                const quizzesDetail = data.data.data;
                const quizzesData = quizzesDetail.map(quizDetail => {
                    const topicDetail = {
                        name: quizDetail.name,
                        total: quizDetail.total
                    }
                    return topicDetail;
                })
                setQuizData(quizzesData);
            })
    }, [])
    return (
        <div className='w-full flex flex-col justify-center items-center'>
            <LineChart
                width={450}
                height={300}
                data={quizData}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                    type="monotone"
                    dataKey="total"
                    stroke="#8884d8"
                    activeDot={{ r: 8 }}
                />
            </LineChart>
            <h1 className='text-2xl font-bold mt-5 mx-auto'>The Data of Quiz Total Marks</h1>
        </div>
    );
};

export default Statistics;