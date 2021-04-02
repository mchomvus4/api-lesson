import React from 'react';
import {Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Feauture from './components/Feauture';
import Guide from './components/Guide';
import NavBar from './components/NavBar';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Switch>
        <Route exact path ='/' component ={Home}/>
        <Route path='/feature' component ={Feauture}/>
        <Route path='/guide' component ={Guide}/> 
      </Switch>
      <Footer copy="2021" developer="Developed by Samwel Mchomvu"/>
    </div>
  );
}

export default App;
