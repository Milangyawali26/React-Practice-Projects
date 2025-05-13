import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { decrement, increment, reset,incrementByAmount } from "./features/counter/counterSlice";
import { useState } from "react";

function App() {
  const [amount, setAmount] = useState(0);
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  function handleIncrementClick() {
    dispatch(increment());
  }

  function handleDecrementClick() {
    dispatch(decrement());
  }

  function handleResetClick() {
    dispatch(reset());
  }

  function handleIncAmount(){
    dispatch(incrementByAmount(Number(amount)));
  }
  return (
    <>
      <div className="container">
        <button onClick={handleIncrementClick}>+</button>
        <p>Count : {count} </p>
        <button onClick={handleDecrementClick}>-</button>
        <br />
        <button onClick={handleResetClick}> reset </button>
        <br />
        <input type="number" value={amount} placeholder="enter amount " onChange={(e)=> setAmount(e.target.value)} />
        <button onClick={handleIncAmount}> Inc by amount </button>
        <br />
      </div>
    
    </>
  );
}

export default App;

//steps:

// create store
//wrap  app component under provider
// create slice
// -- slice has initial state and
//              reducer funtion

// reducer function are logic

// register reducer in store
