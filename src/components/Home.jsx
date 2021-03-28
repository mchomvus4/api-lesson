import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {fetchData} from '../api';
import './Home.css';
import Card from './Card';
export default class Home extends Component {

  state={
    data:{}
  }

  async componentDidMount(){
    const fetchedData = await fetchData();
    
    this.setState({data:fetchedData });
  }
  
  render() {
    const {data}= this.state;
    return (
      <React.Fragment>
         {/* Showcase  */}
    <section className="showcase">
      <div className="container grid">
        <div className="showcase-text">
          <h1>About COVID-19 Pademic</h1>
            <p>
The coronavirus COVID-19 pandemic is the defining global health crisis of our time and the greatest challenge we have faced since World War Two. Since its emergence in Asia in 2019, the virus has spread to every continent except Antarctica.</p>
<Link to ='/feature' className="btn btn-outline">ReadMore</Link>
        </div>
        <div className="showcase-form card">
          <h2>Give us Feedback</h2>
          <form action="">
            <div className="form-control">
              <input type="text" name="name" placeholder="Name" required/>
            </div>
            <div className="form-control">
              <input type="text" name="institute" placeholder="Institute Name" required/>
            </div>
            <div className="form-control">
              <input type="email" name="email" placeholder="Email" required/>
            </div>
            <input type="submit" value="Send" className="btn btn-primary"/>
          </form>
        </div>
      </div>
    </section>
    {/* api inforamtion */}
    <section className="api">
      <div className="container">
        <p className="api-heading text-center my-1">
           It was first identified in December 2019 in Wuhan, China. The World Health Organization declared the outbreak a Public Health Emergency of International Concern on 20 January 2020, and later a pandemic on 11 March 2020. this is the test page
        </p>
          <div>
            <Card data={data}/>
          </div>     
      </div>
    </section>
      </React.Fragment>
    )
  }
}


