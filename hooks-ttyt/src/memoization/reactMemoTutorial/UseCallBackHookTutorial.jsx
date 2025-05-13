import React, { memo, useCallback, useState } from "react";

const Button = memo(({ onClick, children }) => {
  console.log(`rendering button : ${children}`);
  return <button
   onClick={onClick}>{children}</button>;
});

const UseCallBackHookTutorial = () => {
  const [count, setCount] = useState(0);


  const increment = useCallback(()=>{
    console.log("inside increment ");
    setCount((prevCount) => prevCount + 1);
  },[])

  const decrement = useCallback(()=>{
    console.log("inside decrement");
    setCount((prevCount) => prevCount - 1);
  },[])
   
 

  return (
    <div>
      <h1>Count : {count}</h1>
      <Button onClick={increment}> Increment</Button>
      <br />
      <br />
      <Button onClick={decrement}> Decrement</Button>
    </div>
  );
};

export default UseCallBackHookTutorial;



// useCallBack is used to optimize the function 