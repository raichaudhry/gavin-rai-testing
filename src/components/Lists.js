import React from "react";

const numbers = [1, 2, 3, 4, 5];
// Double the numbers array!
// [2, 4, 6, 8, 10]
// Using index as keys is not recommended by React
const doubled = numbers.map((number, index) => (
  <li key={index}>{number * 2}</li>
));

const Lists = () => {
  return (
    <div>
      <ul>{doubled}</ul>
    </div>
  );
};

export default Lists;
