import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "../screens/home-screen";
import AboutScreen from "../screens/about-screen";
import ContactScreen from "../screens/contact-screen";
import SettingScreen from "../screens/setting-screen";
import InvalidScreen from "../screens/Invalid-screen";
function Stack(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" Component={HomeScreen} />
            <Route path="/about" Component={AboutScreen} />
            <Route path="/contact" Component={ContactScreen} />
            <Route path="/setting" Component={SettingScreen} />
            <Route path="*" Component={InvalidScreen}/>
        </Routes>
        
        </BrowserRouter>
    );

}
export default Stack;