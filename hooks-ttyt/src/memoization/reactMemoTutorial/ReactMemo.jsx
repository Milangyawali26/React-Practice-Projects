import React, { useMemo, useState } from 'react'
import MemoCount from './MemoCount'


const ReactMemo = () => {
    const [count,setCount]=useState(0);

    const myBioData=  useMemo(()=>{
      return{
        name:"milan gyawali",
        age:23,
      }
    },[])


  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>setCount((prev)=> prev+1)}> increment </button>
      <MemoCount bioData={myBioData} />
      {/*  the moment the props  {bioData} is passed the useMemo is shown useless */}
      {/*  this is because the props is passsed by reference and can be changed any time in parent component */}

      {/*  that's why we will be using 
      useMemo call back function here also 

      useMemo(()=>{

        },[])
      
      */}
    </div>
  )
}

export default ReactMemo
