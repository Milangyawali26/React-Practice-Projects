import {  useState, useRef } from "react";

import "./App.css";

function App() {
  // const [count, setCount] = useState(0);
  // let val = useRef(0);
  // let btnRef=useRef();

  // //it runs on every render
  // useEffect(() => {
  //   console.log("rendered again");
  // });

  // function handleIncrement() {
  //   val.current = val.current + 1;
  //   console.log("value of val: ", val.current);
  //   setCount(count + 1);
  // }

  // function changeColor() {
  //   btnRef.current.style.backgroundColor="red";
  // }

  const [time, setTime] = useState(0);
  let timerRef =useRef(null);

  function startTimer() {
     timerRef.current=setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 1000);
  }

  function stopTimer() {
    clearInterval(timerRef.current);
    timerRef.current=null;
  }

  function resetTimer() {
    stopTimer();
    setTime(0);
  }

  return (
    <>
      {/* <button ref={btnRef} onClick={handleIncrement}>Increment</button>
      <br />
      <div>count : {count}</div>
      <br />
      <div>
        <button onClick={changeColor}>change color of 1st btn</button>
      </div> */}

      <div>
        <h1> stop watch :{time} seconds</h1>
        <button onClick={startTimer}> Start </button>
        <br />
        <button onClick={stopTimer}> stop timer </button>
        <br />
        <button onClick={resetTimer}> Reset</button>
      </div>
    </>
  );
}

export default App;
