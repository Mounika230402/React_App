import { Component } from "react";

class CircleComponent extends Component{
    state={
        count:0,
    }
    IncreaseCount=()=>{
       
       
    }
    render(){
        return(
            <>
            <button onClick={this.IncreaseCount()}>Click Me</button>
            <h1>{
            `Count ${this.state.count}`}
            </h1>
            </>
            
        )
    }
}
export default CircleComponent