import React from 'react';
import { PieChart, Pie } from 'recharts';

const Piech = () => {

	// Sample data
	const data = [
		{ name: 'Geeksforgeeks', students: 400 },
		{ name: 'Technical scripter', students: 700 },
		{ name: 'Geek-i-knack', students: 200 },
		{ name: 'Geek-o-mania', students: 1000 }
	];

 

	return (
  <>
    <PieChart width={300} height={200}>
			<Pie data={data} dataKey="students" outerRadius={100} 
			innerRadius={70} fill="green" />
		</PieChart>
 
    </>
	);
}

export default Piech;
