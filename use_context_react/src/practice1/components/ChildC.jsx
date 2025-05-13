import React, { useContext } from 'react'
import { ThemeContext, UserContext  } from '../../App'

function ChildC() {
  const user =useContext(UserContext);
   const {theme,setTheme}=useContext(ThemeContext);
   function handleClick(){
    if(theme==='light')
        setTheme('dark')
    else setTheme('light')
   }
  return (
    <>
    {user.username}
    <div>
    <button onClick={handleClick}> Change Theme </button>
   </div></>
  )
}

export default ChildC
