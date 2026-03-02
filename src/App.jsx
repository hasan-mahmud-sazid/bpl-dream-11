import { useState } from "react";
import "./App.css";
import navIMG from "./assets/logo.png";
import dollarIMg from "./assets/dollar-1.png";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">
            <img className="w-[61px] h-[61px]" src={navIMG} alt="" />
          </a>
        </div>
        <div className="flex-none">
          <span>600000000</span>
          <span>Coin</span>
          <img src={dollarIMg} alt="" />
        </div>
      </div>
    </>
  );
}

export default App;
