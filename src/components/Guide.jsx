import React from 'react'
import './Guide.css';
import GuideImage from '../images/guide.jpg'
export default function Guide() {
  return (
    <React.Fragment>
    <section className="guide-head bg-primary py-5">
      <div className="container grid">
       <div>
        <h1 className="xl">Guide Lines</h1>
        <p className="lead">
          Learn WHO Guide Lines for COVID-19
        </p>
       </div>
       <img src={GuideImage} alt="Guidelines" className="guidelines"/>
      </div>
    </section>
    <section className="guide-main py-4">
    <div className="container grid">
       <div className="card bg-light p-3">
         <h3 className="my-2">Covid-19 Guide Lines </h3>
         <nav>
           <ul>
             <li><a href="#">CoronaVirus</a></li>
             <li><a href="#">Overview</a></li>
             <li><a href="#">Prevantion</a></li>
             <li><a href="#">Symptoms</a></li>
           </ul>
         </nav>
         <h3 className="my-2">Covid-19 Guide Lines </h3>
         <nav>
           <ul>
             <li><a href="#">Publications</a></li>
             <li><a href="#">News</a></li>
           </ul>
         </nav>
       </div>
        <div className="card">
          <h2>Coronavirus</h2>
          <p>Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus.
              Most people who fall sick with COVID-19 will experience mild to moderate symptoms and recover without special treatment.</p>
        </div>
    </div>
    </section>
    </React.Fragment>
  )

}
