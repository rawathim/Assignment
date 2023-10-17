import React from "react";
import "./bar.css"
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";

function Chart() {
  const data = [
    {
      name: "Jan",
      score: 1700
    },
    {
      name: "Feb",
      score: 4000
    },
    {
      name: "Mar",
      score: 2700
    },
    {
      name: "Apr",
      score: 2400
    },
    {
      name: "May",
      score: 2000
    },
    {
        name: "Jun",
        score: 1900
      },
      {
        name: "Jul",
        score: 1500
      },
      {
        name: "Aug",
        score: 1800
      },
      {
        name: "Sept",
        score: 1300
      },
     
  ];

  return (
  
  <>

    <div className="char">
    <div className="box">
  <h2> Overview</h2>
  <select className="top">
  <option value="volvo">clickme</option>
  </select>
  </div>
    <ResponsiveContainer width="100%" height={200}>
   
      <BarChart  data={data}>
      
        <Bar dataKey="score" fill="#8884d8" />
        <XAxis dataKey="name" />
        <YAxis />
    
      </BarChart>
     
    </ResponsiveContainer>
    </div>


  
    </>
  );
}

export default Chart;