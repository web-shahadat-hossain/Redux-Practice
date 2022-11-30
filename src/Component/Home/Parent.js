import React, { useContext, useState } from "react";
import { CountContextApi } from "../../App";
import Child from "./Child";

const Parent = () => {
  const { count, setCount } = useContext(CountContextApi);
  return (
    <div>
      <div className="box">
        <h2>{count}</h2>
        <div>
          <button onClick={() => setCount(count + 1)}>+</button>
          <button onClick={() => setCount((dec) => dec - 1)}>-</button>
        </div>
      </div>
      <Child count={count} setCount={setCount} />
    </div>
  );
};

export default Parent;
