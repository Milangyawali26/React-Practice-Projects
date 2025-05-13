import React from 'react'
import { useBioContext } from '.';


const Home = () => {
  //  const {myName,myAge} = useContext(BioContext);
// but after we use custom hooks we can simply write as below :

const {myName,myAge} = useBioContext();

return (
  <div style={{
      alignItems:'center',
      justifyContent:"center",
      
  }}>
    this is {myName} and i am {myAge} years old 
  </div>
)
}

export default Home
