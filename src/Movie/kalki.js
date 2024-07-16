import React from "react"
import Collections from "./collections";


const Kalki = ({title,release,views}) => {
    console.log("child1")
  return (
    <div>
      <Collections title={title} release={release}/>
      <p>Movie views:{views}</p>
    </div>
  )
};

export default Kalki;
