import React, { useContext, useState } from "react";
import { CountContextApi } from "../../App";

const Child = () => {
  const { count, setCount } = useContext(CountContextApi);
  return (
    <div className="box">
      <h2>{count}</h2>
      <div>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount((dec) => dec - 1)}>-</button>
      </div>
    </div>
  );
};

export default Child;
