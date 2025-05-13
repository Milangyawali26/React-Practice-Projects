/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext } from 'react'


export const BioContext = createContext();

const BioProvider = ({children}) => {

const myName='vinod';
const myAge=21;
console.log(children)
    

  return (
    <div>
      <BioContext.Provider value={{myName:myName,myAge:myAge}}>
        {children}
      </BioContext.Provider>
    </div>
  )
}

export default BioProvider


// custom hooks
export const useBioContext =()=>{
    const context = useContext(BioContext);
    return context;
}