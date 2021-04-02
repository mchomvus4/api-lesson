import React from 'react'
import './Footer.css';
export default function Footer({copy,developer}) {
  return (
    <div className="footer text-center">
      <h3>&copy;{copy} |{developer}</h3>
    </div>
  )
}