import React from 'react'
import {Link} from 'react-router-dom';
import './Footer.css';
export default function Footer({copy,developer}) {
  return (
    <div className="footer text-center py-5">
      
      <div className="container grid grid-3">
        <div>
            <h3>&copy;{copy}
            </h3>
            <p>{developer}</p>
        </div>
        <nav className="footer_nav">
          <ul>
            <Link to ='/'>Home</Link>
            {/* <Link to ='/guide'>Guide </Link> */}
          </ul>
        </nav>
        <div className="social">
          <a href="#"><i className="fa fa-twitter fa-2x"></i></a>
          <a href="#"><i className="fa fa-facebook fa-2x"></i></a>
          <a href="#"><i className="fa fa-instagram fa-2x"></i></a>
          <a href="https://github.com/mchomvus4" target="_blank"><i className="fa fa-github fa-2x"></i></a>
        </div>
      </div>
    </div>
  )
}