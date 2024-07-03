import React from "react";
import Navbar from "../components/navbar/nav";
import { Link, Outlet, Route } from "react-router-dom";
import Doctors from "./doctor-screen";
function ContactScreen(){
    return(
        
        <div>
            <Navbar />
            <h1>Welcome Contact Screen</h1>
            <Link to={"doctors"}>Doctors</Link>
            <Link to={"engineers"}>Engineers</Link>
            <Outlet />
            </div>
          
        
    )
}
export default ContactScreen;