import React from "react";
import { useState } from "react";

const LiftingState = () => {

    const [inputValue, setInputValue] = useState("");

  return (
    <div>
    <InputComponent  inputValue={inputValue} setInputValue={setInputValue}/>
      <DisplayComponent inputValue={inputValue}  />
    </div>
  );
};

export default LiftingState;

const InputComponent = (props) => {
  const {inputValue,setInputValue} = props;

  return (
    <>
      <input 
      type="text" 
      placeholder="enter your name" 
      value={inputValue} 
      onChange={(e)=>setInputValue(e.target.value)}
      >
        </input>
    </>
  );
};

const DisplayComponent = ({inputValue}) => {
  return <p>the current input value is : <strong>{inputValue} </strong></p>;
};
