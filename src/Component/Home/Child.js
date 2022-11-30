import React, { useContext, useState } from "react";
import { CountContextApi } from "../../App";

const Child = () => {
  const { count, setCount } = useContext(CountContextApi);
  return <div className="box"></div>;
};

export default Child;
