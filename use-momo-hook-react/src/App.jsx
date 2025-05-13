import { useMemo, useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [input,setInput] = useState(0);
  function expensiveTask(num){
    
    for (let i=0;i<=100000000 ;i++){ /* empty */ }
 
    return num*2;
  }



  let doubleValue = useMemo(()=> expensiveTask(input),[input]);
  return (
    <>
     <button  onClick ={()=> setCount(count+1)}>Increment</button>
     <div>count :{count}</div>
     <div> double :{doubleValue}</div>
    <input type="number" placeholder='enter a number ' value={input} onChange={(e)=>setInput(e.target.value)}/>
    </>
  )
}

export default App
