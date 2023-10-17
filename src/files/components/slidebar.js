import React,{useState} from 'react'
import{ FaAccusoft, FaAddressBook, FaAddressCard, FaAffiliatetheme,FaAndroid, FaBars, FaTh, FaUserAlt} from "react-icons/fa"
import { NavLink } from 'react-router-dom'

const Slidebar = ({children}) => {
    const menuItem=[
        {
            path:"/",
            name:"Dashboard",
            icon:<FaTh/>
        },
        {
            path:"/about",
            name:"Product",
            icon:<FaUserAlt/>
          
        },
        {
            path:"/comment",
            name:"Customers",
            icon:<FaAccusoft/>
          
            

           
        },
        {
            path:"/product",
            name:"Income",
            icon:<FaAddressCard/>
          
        },
        {
            path:"/productlist",
            name:"Promote",
            icon:<FaAddressBook/>
          
        },
        {
            path:"/analytics",
            name:"Help",
            icon:<FaAffiliatetheme/>
           
        }
      
    ]


    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    
  return (
    <div className=' fluid-container'>
    <div style={{width: isOpen ? "150px" : "50px"}} className="sidebar">
    <div className="top_section">
    
      <h1 style={{display: isOpen ? "block" : "none"}} className="logo">{<FaAndroid/>}</h1>
      <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
    
      <FaBars  onClick={toggle}/>
       
      </div>
      </div>

      { menuItem.map((item, index)=>{
       return(
       <NavLink to={item.path} key={index} className="link"
        activeclassName="active">
            <div className="icon">{item.icon}</div> 
          
           <div  style={{display: isOpen ? "block" : "none"}} className="him">{item.name}</div>
           <div>{item.symbol}</div>

       </NavLink>
       )
   })
   }
   
  
          
       

    </div>
    <main>{children}</main>
    </div>
  );


};

export default Slidebar;