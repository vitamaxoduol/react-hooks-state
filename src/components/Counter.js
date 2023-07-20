import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    // console.log(`before setState: ${count}`);


    setCount((currentCount) => currentCount + 1);
    setCount((currentCount) => currentCount + 1);

    // console.log(count);

    // setCount(count + 1);

    // console.log(count);

    // console.log(`after setState: ${count}`);
  }

  return <button onClick={increment}>I have been clicked {count} times</button>;
}

export default Counter;
