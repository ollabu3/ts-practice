import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState<number>(0); //type number

  function onIncrease() {
    return setCount(count + 1);
  }
  // const onIncrease = () => setCount(count + 1);
  function onDecrease() {
    return setCount(count - 1);
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={onIncrease}>플러스</button>
      <button onClick={onDecrease}>마이너스</button>
    </div>
  );
}

export default Counter;
