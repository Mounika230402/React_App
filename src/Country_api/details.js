import React, { useState } from "react"
import { useParams } from "react-router-dom";

const Details = () => {
    const params=useParams()
    const {id}=params
    
  return (
    <div>
        {
            console.log(id)
        }
        <h1>hii</h1>
    </div>
  )
};

export default Details;
