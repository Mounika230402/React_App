import React, { useContext } from "react";
import Navbar from "../components/navbar/nav";
import { Profile } from "../stack/stack";
function HomeScreen(){
    const sharedData=useContext(Profile)
    console.log(sharedData)
    return(
        <div>
            <Navbar />
            <h1>Welcome HomeScreen {sharedData.ProfileInfo.name}</h1>
        </div>
    )
}
export default HomeScreen;