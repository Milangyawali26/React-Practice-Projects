import { useEffect } from "react";
import "./App.css";
import { useState } from "react";
import LoggerComponent from "./components/LoggerComponent";

function App() {

  const [count ,setCount]=useState(0);
  const [total , setTotal]=useState(1);

  // variation 1 :
  // runs on every render

  // useEffect(() => {
  //   alert("i will run on each render ");
  // })


  //variation 2 :
  // that runs on only first render 

  // useEffect (()=>{
  //   alert(' i will run on only first render ')
  // },[])


  //   variation 3: 
  
  // useEffect(()=>{
  //    alert ("i will run every time when count is updated")
  // },[count])


  // variation 4
  // multiple dependencies

  // useEffect(()=>{
  //    alert (" i will render everyt time when count or total is update")
  // },[count , total])


  //variation 5 
  // lets add clean up function

  useEffect(()=>{
    alert("count is updated ")

    return()=>{
    alert("count is unmounted form ui ")
    }
  },[count])


  function handleClick(){
    setCount(count+1);
   

  }

  function handleClickTotal(){
    setTotal(total+1);
  }

  return (
    <>
      <div>hello milan</div>
      <br />
      <br />

      <button onClick={handleClick}> Update count   </button>
      <h5>count is {count}</h5>

      <br /><br />
      <button onClick={handleClickTotal}> Update total   </button> 
      <h5>total is {total}</h5>

      <LoggerComponent/>

    </>
  )
}

export default App;
