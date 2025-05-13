import React, { useReducer } from "react";
import ComponentA from "./components/ComponentA";
import ComponentC from "./components/ComponentC";
import ComponentB from "./components/ComponentB";


export const CountContext = React.createContext();

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


function App3() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <CountContext.Provider value={{count,dispatch}}>
      <div>
        <div className="flex text-4xl justify-center mb-5"> count : {count}</div>
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </div>
    </CountContext.Provider>
  );
}

export default App3;
