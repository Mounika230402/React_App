import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cardcomponent() {
    const arr=[1,2,3,4,5,6]
    const [index,setIndex]=useState(0)

    const Prev=()=>{
        if(index>0)
        setIndex(index-1)
    }
    const Next=()=>{
        if(index<arr.length)
        setIndex(index+1)
    }
  return (
   <div>
    <div>
    {
        index<=0? <Button variant="primary" size="lg" disabled>Prev</Button>:<Button variant="primary" onClick={Prev}>Prev</Button>
    }
    <h1>{arr[index]}</h1>
    {
        index>=arr.length? <Button variant="primary" size="lg" disabled onClick={Next}>Next</Button>:<Button variant="primary" onClick={Next}>Prev</Button>
    }
    </div>
   </div>
  );
}

export default Cardcomponent;