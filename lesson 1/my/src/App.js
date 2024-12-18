import logo from "./logo.svg";
import "./App.css";
import { useRef, useState } from "react";

function App() {
  const ref = useRef("");
  const [name, setName] = useState("");
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <br></br>
        <input
          ref={ref}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <p className="text-center text-5xl">hello {name}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
