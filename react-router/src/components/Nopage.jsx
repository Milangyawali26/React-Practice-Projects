import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'


function Nopage() {

    const navigate=useNavigate();

    function onclickHandler(){
        navigate('/');
    }


  return (
    <div>
      <h1>404 - page not foud</h1><br />
      <button onClick={onclickHandler}> return to home page</button>
    </div>
  )
}

export default Nopage
