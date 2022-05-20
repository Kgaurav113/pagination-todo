import React, { useState } from "react";

export const Counter = () => {
  const [count, setcount] = useState(0);
  const increamentCount = () => {
    setcount(count + 1);
  };
  const decrementCount = () => {
    setcount(count -1);
  };
  const doubleCount =()=>{
    setcount(count*2);
  }
  return (
    <div>
      <h1  style={{color:`${count%2===0?"green":"red"}`}}>Counter:{count}</h1>
      <button onClick={increamentCount}>Increment</button>
      <button onClick={decrementCount}>Increment</button>
      <button onClick={doubleCount}>double</button>
    </div>
  );
};
