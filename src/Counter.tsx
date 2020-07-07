import React, { useReducer } from "react";

type Action = { type: "INCREASE" } | { type: "DECREASE" }; // 액션 OR

function reducer(state: number, action: Action): number {
  switch (action.type) {
    case "INCREASE":
      return state + 1;
    case "DECREASE":
      return state - 1;
    default:
      throw new Error("Unhandled action");
  }
}

function Counter() {
  const [count, dispatch] = useReducer(reducer, 0);

  function onIncrease() {
    return dispatch({ type: "INCREASE" });
  }

  function onDecrease() {
    return dispatch({ type: "DECREASE" });
  }

  return (
    <div>
      <h1>{count}</h1>
      <div>
        <button onClick={onIncrease}>플러스</button>
        <button onClick={onDecrease}>마이너스</button>
      </div>
    </div>
  );
}

// function Counter() {
//   const [count, setCount] = useState<number>(0); //type number

//   function onIncrease() {
//     return setCount(count + 1);
//   }
//   // const onIncrease = () => setCount(count + 1);
//   function onDecrease() {
//     return setCount(count - 1);
//   }
//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={onIncrease}>플러스</button>
//       <button onClick={onDecrease}>마이너스</button>
//     </div>
//   );
// }

export default Counter;
