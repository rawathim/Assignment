import React from 'react'
import "./dashboard.css"
import { FaAppStore } from 'react-icons/fa'
import Chart from './bar';
import Pien from './pie';


function Dashboard() {
  
   const itemmenu=[


    {
      img:"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
      Name:"Earning",
      price:"$45.5k",
      profit:"+37.5% this month"
    },
    {
      img:"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
      Name:"Balance",
      price:"$45.5k",
      profit:"+37.5% this month"
    },
    {
      img:"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
      Name:"Sales",
      price:"$45.5k",
      profit:"+37.5% this month"
    },
    {
      img:"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
      Name:"Profit price",
      price:"$45.5k",
      profit:"+37.5% this month"
    },
   ]


  return (
    <>
   <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    
    <a className="navbar-brand" href="#">Welcome<FaAppStore/></a>
    
      <form className="d-flex" role="search">
        <input className="form-control me-2"  type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
 
</nav>



{
  itemmenu.map((curelment)=>{
    return(
      <div className="box2">
      <div className="card">
          <div className="card-body">
            <img src={curelment.img} ></img>
            <div className="card-title">
           <p>{curelment.Name}</p>
           <h5>{curelment.price}</h5>
           <h6>{curelment.profit}</h6>
          </div>
        </div>
      </div>
      </div>
    )

  })
  }

<div className="boxtop">
    <div className="App"> 
    <Chart />
    <Pien/>
  </div>


</div>

<div className="content">


<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    
    <a className="navbar-brand" href="#">Product Sale</a>
    
      <form className="d-flex" role="search">
        <input className="form-control me-2"  type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>

    </div>
 
</nav>

<div>
<table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">Product Name</th>
      <th scope="col">stock</th>
      <th scope="col">Price</th>
      <th scope="col">Total Sales</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th className="tab" scope="row">
        <div className="abt">
        <img  className="image" src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg"></img>
        <div className="tabt">
        <h4>Abstract 3D</h4>
        <p>Since we do not have any page to link it to </p>
        </div>
        </div>
      </th>
      <td>32 in stock</td>
      <td>$45.99</td>
      <td>20</td>
    </tr>
    <tr>
      <th className="tab" scope="row">
     
        <div className="abt">
        <img  className="image" src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg"></img>
        <div className="tabt">
        <h6>Abstract 3D</h6>
        <p> Since we do not have any page to link it to 
        </p>
        </div>
        </div>
      </th>
      <td>50 in stock</td>
      <td>$50.99</td>
      <td>20</td>
    </tr>
  </tbody>
</table>


</div>
  
        





</div>




    
  
    </> 
  )
}

export default Dashboard