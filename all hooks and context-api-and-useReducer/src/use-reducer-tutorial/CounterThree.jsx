import React, { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;

    default:
      return state;
  }
};

const CounterThree = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  const [countTwo,dispatchTwo]=useReducer(reducer,initialState);

  return (
    <div className="flex text-3xl flex-col gap-6 m-6">
    <div className="flex flex-col gap-4">
    <div>Count :{count}</div>
      <div className="flex flex-row gap-6">
        <button
          onClick={() => {
            dispatch("increment");
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            dispatch("decrement");
          }}
        >
          Decrement
        </button>
        <button
          onClick={() => {
            dispatch("reset");
          }}
        >
          Reset
        </button>
      </div>
    </div>

     <div className="flex flex-col gap-4">
     <div>CountTwo :{countTwo}</div>

<div className="flex flex-row gap-4">
  <button
    onClick={() => {
      dispatchTwo("increment");
    }}
  >
    Increment
  </button>
  <button
    onClick={() => {
      dispatchTwo("decrement");
    }}
  >
    Decrement
  </button>
  <button
    onClick={() => {
      dispatchTwo("reset");
    }}
  >
    Reset
  </button>
</div>
     </div>
    </div>
  );
};

export default CounterThree;
