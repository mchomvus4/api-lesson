import React from 'react';
import {Link} from 'react-router-dom';
import '../App.css'
export default function NavBar() {
  return (
    <React.Fragment>
    <div className="navbar">
     <div className="container flex">
      <h1 className="logo">COVID-19</h1>
      <nav>
       <ul>
        <li>
         <Link className="links" to='/'>Home</Link>
        </li>
        
        <li>
         {/* <Link className="links" to='/guide'>Guide</Link> */}
        </li>
       </ul>
      </nav>

     </div>
      
    </div>
   
    </React.Fragment>
  )
 
}
