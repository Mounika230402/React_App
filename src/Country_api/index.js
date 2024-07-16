
import React, { useEffect, useState } from "react"
import axios from "axios";

const CountryComponent = (props) => {
    const[offical,setoffical]=useState([])
    const[country,setCountry]=useState("")
    const[countryDetails,setCountryDetails]=useState({})
    
    useEffect( ()=>{
        fetchData()
    },[])
    // useEffect(()=>{
    //     const response= axios.get("https://restcountries.com/v3.1/name/"+{country}).then(data=>data).catch(err=>console.log("error"))
    //     console.log(response.data)
    // },[country])
    const fetchData=async ()=>{
        const response= await axios.get("https://restcountries.com/v3.1/all")
        const{data,status}=response
        if(status===200){
            const offical=data.map(each=>each.name.official)
            setoffical(offical)
        }
    }
    const countryData=async (country)=>{
        const response= await axios.get(`https://restcountries.com/v3.1/name/${country}`)
        setCountryDetails(response.data[0])
        }
    

   function CountryHandler(event){
    setCountry(event.target.value)
    countryData(event.target.value)
    }
  return (
    <div>
      <select onChange={CountryHandler}>
        <option value="">Select a country</option>
        {
            offical.map((eachItem,index)=>{
                return <option value={eachItem} key={index}>{eachItem}</option>
            })
        }
      </select>

      <h2>{country}</h2>
      {
        console.log(countryDetails)
      }
      {
        Object.keys(countryDetails).length > 0 && <>
        <h2>Capital:{countryDetails.capital[0]}</h2>
        <h2>Flag:{countryDetails.flag}</h2>
        <img src={countryDetails.flags.png} alt="bdhj"/>
        </>
      }
    </div>
  )
};

export default CountryComponent;
