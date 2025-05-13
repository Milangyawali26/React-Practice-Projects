import React, { useReducer } from "react";

const initialState = {
  firstCounter: 0,
  secondCounter: 10,
};

const reducer = (state, action) => { 
  switch (action.type) {
    case "increment":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "decrement":
      return { ...state, firstCounter: state.firstCounter - action.value };

    case "increment2":
      return { ...state, secondCounter: state.secondCounter + action.value };
    case "decrement2":
      return { ...state, secondCounter: state.secondCounter - action.value };
    case "reset":
      return initialState;

    default:
      return state;
  }
};

const CounterTwo = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="flex flex-col  text-6xl justify-center items-center align-middle gap-5">
      <div>FirstCount :{count.firstCounter}</div>

      <div className="flex gap-6 text-4xl">
        <button
          onClick={() => {
            dispatch({ type: "increment", value: 1 });
          }}
        >
          Increment by 1
        </button>
        <button
          onClick={() => {
            dispatch({ type: "decrement", value: 1 });
          }}
        >
          Decrement by 1
        </button>

        <button
          onClick={() => {
            dispatch({ type: "increment", value: 5 });
          }}
        >
          Increment by 5
        </button>
        <button
          onClick={() => {
            dispatch({ type: "decrement", value: 5 });
          }}
        >
          Decrement by 5
        </button>
        <button
          onClick={() => {
            dispatch({ type: "reset" });
          }}
        >
          Reset
        </button>
      </div>

      <div>SecondCount :{count.secondCounter}</div>
      <div className="flex gap-6 text-4xl">
        <button
          onClick={() => {
            dispatch({ type: "increment2", value: 1 });
          }}
        >
          Increment by 1
        </button>
        <button
          onClick={() => {
            dispatch({ type: "decrement2", value: 1 });
          }}
        >
          Decrement by 1
        </button>

        <button
          onClick={() => {
            dispatch({ type: "increment2", value: 5 });
          }}
        >
          Increment by 5
        </button>
        <button
          onClick={() => {
            dispatch({ type: "decrement2", value: 5 });
          }}
        >
          Decrement by 5
        </button>
        <button
          onClick={() => {
            dispatch({ type: "reset" });
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default CounterTwo;
