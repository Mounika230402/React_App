import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CountryComponent from "./index";
import Details from "./details";
import SignIn from "./google";
// import CardComponent from "./card";

// import CardComponent from "./card";

const CountryCard = (props) => {
  return (
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<SignIn />} />
            <Route path="/Country" element={<CountryComponent />} />
            {/* <Route path="/about" element={<CardComponent />} /> */}
            <Route path="/:id" element={<Details/>}/>
        </Routes>
        
        </BrowserRouter>
  )
};

export default CountryCard;
