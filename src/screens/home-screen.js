import React, { useContext } from "react";
import Navbar from "../components/navbar/nav";
import  profile  from "../HOC/Profile";
import { Profile } from "../stack/stack";
import MemoExample from "../HOC/memo";
function HomeScreen(prop){
    const sharedData=useContext(Profile)
    console.log(sharedData)
    return(
        <div>
            <Navbar theme="true" />
            <h1>Welcome HomeScreen {prop.data.name}</h1>
            <MemoExample/>
        </div>
    )
}
export default profile(HomeScreen);