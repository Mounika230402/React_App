import React from "react"

const Collections = ({title,release}) => {
    console.log("child2")
  return (
    <div>
      <h1>{title}</h1>
      <h5>{release}</h5>
    </div>
  )
};

export default React.memo(Collections);
