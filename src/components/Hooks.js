// HOOKs
// Hooks are ways to use state without using classes!
// wrapper

// Rules for using hooks
// 1. Only call hooks at the TOP LEVEL. Not in LOOPS, conditions, NESTED functions
// 2. Only call Hooks from React FUNCTION components. (Unless you make your own hook)

import React, { useState, useEffect } from "react";

// Write a component that when you click a button it will show a RANDOM number (1-1000).
// Also, show the PREVIOUS random number (mod?)
// useEffect to show the numbers in the title

const Hooks = () => {
  // declare a new state variable
  const [count, setCount] = useState(0);
  // declare a new state variable.
  // Fruits
  const [fruit, setFruit] = useState("apple");
  // useEffect hook in the document title!
  // side effects : data fetching (grabbing stuff from an api)
  //              : subscribe (youtube, facebook, GMAIL)
  useEffect(() => {
    // update the document title using the browser api
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times!</p>
      <p>My fruit is {fruit}</p>
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  );
};

export default Hooks;
