import { useState,useEffect } from "react";

function DigitalClock(){
    const[time,setTime]=useState(new Date())
    useEffect(()=>{
        const timeInterval=setInterval(()=>
        {
            setTime(new Date())
        },1000)
        return ()=>{
            clearInterval(timeInterval)
        }
    })
    function dateformat(){
        let hours=time.getHours()
        let minutes=time.getMinutes()
        let seconds=time.getSeconds()
        // let milliseconds=time.getMilliseconds()
        hours=hours>12 ? hours-12 : hours 
        hours=hours<10 ? `0${hours}`:hours
        minutes=minutes<10 ? `0${minutes}`:minutes
        seconds=seconds<10 ? `0${seconds}`:seconds
        // milliseconds=milliseconds<10 ? `0${milliseconds}`:milliseconds
        return `${hours} : ${minutes} : ${seconds}`

    }
    return(
        <>
        <h1>Digital Clock</h1>
        <h4>{dateformat()}</h4>
        </>
    )
}
export default DigitalClock