import logo from "./logo.svg";
import "./App.css";
import Parent from "./Component/Home/Parent";
import { createContext, useState } from "react";
export const CountContextApi = createContext();
function App() {
  const [count, setCount] = useState(0);
  const value = { count, setCount };
  return (
    <CountContextApi.Provider value={value}>
      <div className="container">
        <Parent />
      </div>
    </CountContextApi.Provider>
  );
}

export default App;
