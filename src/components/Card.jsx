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
      <img src={image} alt="no-image"/>
         <h3 className="confirmed">
          <CountUp  start={0} end={confirmed.value} duration={2.5} separator=","/>
         </h3>
         <p className="text-secondary infected">Infected from covid-19</p>
    </div>
    <div>
      <img src={image} alt="no-image"/>
         <h3>
          <CountUp className="recovered" start={0} end={recovered.value} duration={2.5} separator=","/>
         </h3>
         <p className="text-secondary">Recovered from covid-19</p>
    </div>
    <div>
     <img src={image} alt="no-image"/>
         <h3>
          <CountUp className="deaths" start={0} end={deaths.value} duration={2.5} separator=","/>
         </h3>
         <p className="text-secondary">Deaths from covid-19</p>
    </div>
    </div>
    </React.Fragment>
  )
}

export default Card
