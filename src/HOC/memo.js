import React, { useState } from "react"
import  Heading1  from "../components/heading/headings";

const MemoExample = (p) => {
    const [state, setstate]=useState(false)
  return (
    <div>
      <Heading1/>
      <button onClick={()=>setstate(!state)}>State Change</button>
      {
        state ? <h2>State is True</h2> : <h2>State is False </h2>
      }
    </div>
  )
};

export default MemoExample;
