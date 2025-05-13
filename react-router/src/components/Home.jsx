import React from 'react'
import { useNavigate } from 'react-router-dom'
import About from './About';

function Home() {

  const navigate = useNavigate();
  function handleClick(){
    navigate('/about');
  }
  return (
    <div>
      <h1>Hoomepage</h1>
      <button onClick={handleClick}>
        move to about page
      </button>
    </div>
  )
}

export default Home
