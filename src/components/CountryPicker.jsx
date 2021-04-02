import React,{useState, useEffect} from 'react'
import {NativeSelect, FormControl} from '@material-ui/core'
import {fetchCountries} from '../api'
import './CountryPicker.css';
    
function CountryPicker({handleCountryChange}) {
 const[fetchedCountries, setfetchedCountries]= useState([]);

 useEffect(()=>{ 
      const fetchAPI = async()=>{
        setfetchedCountries( await fetchCountries())
      }
      fetchAPI();
   },[setfetchedCountries]); 
 return (
  <div className="container">
  <FormControl className="form-control">
   <NativeSelect defaultValue="" onChange={(e)=>handleCountryChange(e.target.value)}>
    <option value="">Global Data</option>
 {fetchedCountries.map((country,index)=><option key={index} value={country}>{country}</option>)}
   </NativeSelect>
  </FormControl>
  </div>
 )
}

export default CountryPicker

