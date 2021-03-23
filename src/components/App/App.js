// import logo from "./logo.svg";
import React from "react";
import "./App.css";
import Learning from "../Learning";
import Greeting from "../Greeting";
import Lists from "../Lists";
import Btn from "../Btn";
import FormTest from "../FormTest";
import Calculator from "../Calculator";
import Hooks from "../Hooks";

const name = "Billy Bob";
const subject = "React";

// props are key in react
// they pass in values from parent components

// 1. Break the UI up into components
// 2. Build a static version
// 3. Identify the minimal representation of the UI STATE
// - Do I need props? Is the data passed as props
// - Does the data change over time?
// - Can you compute it using any state or props?

// - Search text
// 4. Identify where your state lives! (Hardest steps)
// - Reach is One-way data flow
// 5. Add inverse data flow
// - Components should manage their own state (setState())

const App = () => {
  return (
    <>
      <Hooks />
      {/* // fragment */}
      {/* <Learning name={name} subject={subject} /> */}
      {/* <Greeting isLoggedIn={false} /> */}
      {/* <Lists /> */}
      {/* <Btn /> */}
      {/* <FormTest /> */}
      {/* <Calculator />

      {/* <div className="App">
        <header className="App-header">
          <p>how's it going?</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div> */}
      {/* <div>
        <p>lorem</p>
      </div> */}
    </>
  );
};

export default App;
