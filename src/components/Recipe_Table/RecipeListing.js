import axios from "axios";
import React,{ useState,useEffect } from "react";
import CustomSpinner from "../spinner/dnaSpinner";
import RecipeTable from "./RecipeTable";

function RecipeList(){
    const[data,setData]=useState([])
    useEffect(()=>{
        console.log("useeffect executing")
        fetchData()
    },[])
    const fetchData=async ()=>{
        const response= await axios("https://dummyjson.com/recipes")
        if(response.status===200){
            setData(response.data.recipes)
            console.log(response.data.recipes)
        }

    }
    return (
        <>{
            data.length>0 ? <RecipeTable data={data}/> : <CustomSpinner />
        }
        
        </>
    )

}
export default RecipeList