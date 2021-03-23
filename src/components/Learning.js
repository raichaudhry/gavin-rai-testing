import React from "react";
import Welcome from "./Welcome";
import Toggle from "./Toggle";

// const name = "Hamza Sayyid";
const callbackfn = () => {
  console.log("button clicked!");
};

// props are Read-Only!
// Functions can be pure
// can't change their parents values
const Learning = (props) => {
  const { name, subject } = props; // Highly recommended!!
  return (
    <>
      {/* <Welcome name={name} />
      <Toggle /> */}
      <p>
        {name} is learning {subject}!
      </p>
      {/* () => console.log("something") */}
      <button type="button" onClick={callbackfn}>
        Click me!
      </button>
      {/* <button onclick="console.log('Button was pressed')></button> */}
    </>
  );
};

export default Learning;
