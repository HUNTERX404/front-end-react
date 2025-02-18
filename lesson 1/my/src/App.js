import logo from "./logo.svg";
import "./App.css";
import { Fragment, useRef, useState } from "react";

function App() {
  const ref = useRef("");
  const [name, setName] = useState("");
  const [counter, setCounter] = useState(0);
  return (
    <>
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <br></br>
        <input
          ref={ref}
          className="border"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <p className="text-center text-5xl">hello {name}</p>
        <div>
          <p className="my-4 ">counter : {counter}</p>
          <button
            className="bg-blue-400 text-white p-2 px-4 rounded"
            onClick={() => {
              setCounter(counter + 1);
            }}
          >
            add counter
          </button>
        </div>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
      <div>lorasd naskds akld jsa kdhask dljaskld jsalkd</div>
    </>
  );
}

export default App;
