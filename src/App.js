import React, { Component } from 'react';
import {Cards,Charts,CountryPicker} from './components';
import styles from './App.module.css';
import {fetchData} from './api';
 class App extends Component {

  async componentDidMount(){
   const sam = await fetchData();
   console.log(sam)
  }
  render() {
    return (
      <div className={styles.container}>
       <Cards/>
      <Charts/>
      <CountryPicker/> 
      </div>
    )
  }
}
export default App;