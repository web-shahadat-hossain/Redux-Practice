import { type } from "@testing-library/user-event/dist/type";
import React, { useContext, useReducer, useState } from "react";
import { CountContextApi } from "../../App";

const Child = () => {
  const initialize = 0;
  const reducer = (state, action) => {
    if (action.type === "increment") {
      return state + 1;
    } else if (action.type === "dicrement") {
      return state - 1;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialize);

  return (
    <div className="box">
      <h2>{state}</h2>
      <div>
        <button onClick={() => dispatch({ type: "increment" })}>+</button>
        <button onClick={() => dispatch({ type: "dicrement" })}>-</button>
      </div>
    </div>
  );
};

export default Child;
