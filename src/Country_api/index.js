
import React, { useEffect, useState } from "react"
import axios from "axios";
import CardComponent from "./card";

const CountryComponent = (props) => {
  const[Data,setData]=useState([])
    const[offical,setoffical]=useState([])
    const[country,setCountry]=useState("")

    
    useEffect( ()=>{
        fetchData()
    },[])
    const fetchData=async ()=>{
        const response= await axios.get("https://restcountries.com/v3.1/all")
        const{data,status}=response

        if(status===200){
            console.log(data)
            setData(data)
        }
    }
    

   function CountryHandler(event){
    setCountry(event.target.value)
    console.log(country)
  
    const offical=Data.filter(each=> each.name.official.toLowerCase().includes(event.target.value))
    setoffical(offical)
    }
  return (
    <>
    <input type="text" value={country} onChange={CountryHandler} placeholder="Enter the country" style={{width:"50vw",margin:"3vh 25vw",padding:"2vh",borderRadius:"2vw"}}/>
    <div style={{display:"grid",gridTemplateColumns:"auto auto auto auto",gap:"2vw",justifyContent:"space-around"}}>
      {
        offical.length>0 ?
        offical.map((each,index)=>{
          return(
            <CardComponent country={each.name.official} flag={each.flags.png} population={each.population} capital={each.capital} key={index}/>
           
          )
        }):
        Data.map((each,index)=>{
          return(
            <CardComponent country={each.name.official} flag={each.flags.png} population={each.population} capital={each.capital} key={index}/>
           
          )
        })
      }
    
    </div>
    </>
  )
};

export default CountryComponent;


// {/* <select onChange={CountryHandler}>
//         <option value="">Select a country</option>
//         {
//             offical.map((eachItem,index)=>{
//                 return <option value={eachItem} key={index}>{eachItem}</option>
//             })
//         }
//       </select>

//       <h2>{country}</h2>
//       {
//         console.log(countryDetails)
//       }
//       {
//         Object.keys(countryDetails).length > 0 && <>
//         <h2>Capital:{countryDetails.capital[0]}</h2>
//         <h2>Flag:{countryDetails.flag}</h2>
//         <img src={countryDetails.flags.png} alt="bdhj"/>
//         </>
//       } */}