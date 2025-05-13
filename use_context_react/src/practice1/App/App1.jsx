import { createContext, useState } from "react";
import "./App.css";
import ChildA from "../ChildA";

//step 1: create context
 const UserContext=createContext();
const ThemeContext = createContext();

//step2 : wrap all the child inside a provider
//  step 3: pass value

//step 4: go to consumer and consume

function App1() {
  const [theme,setTheme] = useState("light");
const [user]=useState({username:"milan"})
  return (
    <>
      <UserContext.Provider value={user} >
   
      <ThemeContext.Provider value={{theme,setTheme}}>
        <div id ='container' style ={{backgroundColor:theme==="light" ? "beige" : "black"}} >
          <ChildA />
        </div>
      </ThemeContext.Provider>
      </UserContext.Provider>



     
    </>
  );
}

export default App1;
 export { UserContext };
export { ThemeContext };
