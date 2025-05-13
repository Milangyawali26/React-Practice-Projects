import { useState } from "react";

export default function RandomColor() {

    const [typeOfColor,setTypeOfColor] =useState('hex');
    const[color ,setColor]= useState('#000')

  return (
    <div 
    style={{
        width:"100vw",
        height:"100vh",
        background:color,
        
        

    }}
    
    className="container">
      <button>create hex color</button>
      <button>create rgb color</button>
      <button>Generate Random Color</button>
    </div>
  );
}
