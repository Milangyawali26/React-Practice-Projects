import React, { useMemo, useState } from "react";

const ExpensiveComponet = () => {
  const sum = () => {
    console.log("Calculating sum ...");
    let i = 0;
    for (i = 0; i <= 1000000000; i++) {
      i = i + 1;
    }
    return i;
  };

  const total = useMemo(()=>{
     return sum()
  },[])
//   const total = sum();

  return (
    <div>
      <p>sum :{total}</p>
    </div>
  );
};




const MemoParentComponet =()=>{
    const [count,setCount]=useState(0);

    return (
        <div>

            {/*  calling this function is not usefull in every render the componenet also re-render this function is called  */}
            <ExpensiveComponet />
            <br />
            <button
            onClick={()=> setCount(count+1)}
            > Re- render Parent </button>
            <p>Parent re renders :{count}</p>
        </div>
    )
};
export default MemoParentComponet;