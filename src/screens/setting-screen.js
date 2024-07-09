import React, { useState } from "react";
import Navbar from "../components/navbar/nav";
import { useContext } from "react";
import { Profile } from "../stack/stack";
function SettingScreen(){
    const sharedData=useContext(Profile)
    const [username,setusername]=useState("")
    const form=(event)=>{
        const name=event.target.value
        setusername(name)
    }
    const changeName=()=>{
        sharedData.changeName(username)
    }
    return(
        <div>
            <Navbar />
            <h1>Welcome SettingScreen {sharedData.ProfileInfo.name}</h1>
            <input type="text" value={username} onChange={form}></input>
            <button onClick={changeName}>ChangeName</button>
        </div>
        
    )
}
export default SettingScreen;