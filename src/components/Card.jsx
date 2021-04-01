import React from 'react';
import CountUp from 'react-countup';
import image from '../images/coronavirus.png'
import './Card.css';
function Card({data: {confirmed, recovered, deaths, lastUpdate}}) {
 if(!confirmed){
  return 'Loading information....'
 }
 
  return (
   <React.Fragment>
       <div className="grid grid-3 text-center my-4">
    <div>
      <p className="text-secondary infected">Infected</p>
      <img src={image} alt="no-image"/>
         <h3 className="confirmed">
          <CountUp  start={0} end={confirmed.value} duration={2.5} separator=","/>
         </h3>
         <p className="text-secondary infected">{new Date(lastUpdate).toDateString()}</p>
         <p className="text-secondary infected">Number of Active cases</p>
    </div>
    <div>
      <p className="text-secondary infected">Recovered</p>
      <img src={image} alt="no-image"/>
         <h3>
          <CountUp className="recovered" start={0} end={recovered.value} duration={2.5} separator=","/>
         </h3>
         <p className="text-secondary infected">{new Date(lastUpdate).toDateString()}</p>
         <p className="text-secondary">Number of recoveries</p>
    </div>
    <div>
      <p className="text-secondary infected">Deaths</p>
     <img src={image} alt="no-image"/>
         <h3>
          <CountUp className="deaths" start={0} end={deaths.value} duration={2.5} separator=","/>
         </h3>
         <p className="text-secondary infected">{new Date(lastUpdate).toDateString()}</p>
         <p className="text-secondary">Number of deaths</p>
    </div>
    </div>
    </React.Fragment>
  )
}

export default Card
