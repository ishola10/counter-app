import "./App.css";
import { ChevronUp } from "react-feather";
import { ChevronsUp } from "react-feather";
import { ChevronDown } from "react-feather";
import { ChevronsDown } from "react-feather";
import { RotateCcw } from "react-feather";
import { Hash } from "react-feather";
import { useEffect, useState } from "react";

function UpdateTitle(count) {
useEffect(() => {
  document.title = `Counter App (${count})`;
}, [count]);
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      
      {/* {UpdateTitle(count)} */}
      <div className="card">
        <h1>Counter App</h1>
        <h2>{count}</h2>
        <div className="buttons">
          <button onClick={() => setCount(count + 1)}>
            <ChevronUp />{" "}
          </button>
          <button onClick={() => setCount(count + 10)}>
            {" "}
            <ChevronsUp />{" "}
          </button>
          <button onClick={() => setCount(0)}>
            <RotateCcw />{" "}
          </button>
          <button onClick={() => setCount(Math.floor(Math.random() * 100) + 1)}>
            <Hash />{" "}
          </button>
          <button onClick={() => setCount(count - 1)}>
            <ChevronDown />{" "}
          </button>
          <button onClick={() => setCount(count - 10)}>
            <ChevronsDown />{" "}
          </button>
        </div>
      </div>
      {UpdateTitle}
    </div>
  );
}

export default App;
