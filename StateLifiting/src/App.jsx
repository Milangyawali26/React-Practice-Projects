import React from "react"
import Card from "./components/card"
import { useState } from "react";

function App() {

  //create state
  const [name, setName] = useState('');


  return (
   <div>
    <Card  title ="card1" name={name} setName={setName}/>
    <Card  title ="card2" name={name} setName={setName}/>
    {/* <p>i am inside parent component : {name}</p> */}
   </div>
  )
}

export default App
