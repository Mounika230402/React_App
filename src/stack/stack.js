import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "../screens/home-screen";
import AboutScreen from "../screens/about-screen";
import ContactScreen from "../screens/contact-screen";
import SettingScreen from "../screens/setting-screen";
import InvalidScreen from "../screens/Invalid-screen";
import Doctors from "../screens/doctor-screen";
import Engineers from "../screens/engineer-screen";
function Stack(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/about" element={<AboutScreen />} />
            <Route path="/contact" element={<ContactScreen />} >
            <Route path="doctors" element={<Doctors />} />
            <Route path="engineers" element={<Engineers />} />
            </Route>
            <Route path="/setting" element={<SettingScreen />} />
            <Route path="*" element={<InvalidScreen />}/>
        </Routes>
        
        </BrowserRouter>
    );

}
export default Stack;