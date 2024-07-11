import { useEffect, useState } from "react";

const profile = (WrapComponent) => {
    
  return(prop)=>{
    const [data, setData]=useState({})
    useEffect(()=>{
        const data={
            name:"mounika",
            salary:"40k"
        }
        setData(data)
    },[prop]);
    return <WrapComponent data={data} {...prop}/>
  }
 
};

export default profile;
