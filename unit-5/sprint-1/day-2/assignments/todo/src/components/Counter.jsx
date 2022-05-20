import React, { useState } from "react";

export const Counter = () => {
  const [count, setcount] = useState(0);
  const increamentCount = () => {
    setcount(count + 1);
  };
  return (
    <div>
      <h1>Counter:{count}</h1>
      <button onClick={increamentCount}>Increment</button>
      <button>Decrement</button>
    </div>
  );
};
