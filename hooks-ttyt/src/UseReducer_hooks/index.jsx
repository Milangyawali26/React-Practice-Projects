import React, { useReducer } from 'react';

const ReducerComponent = () => {

   
//     const reducer = (state, action) => {


// };
 // step2:create a reducer fuction 
  const reducer = (state, action) => {
            //step4 receive the dispatch funcion and handle logic
            if(action.type==="INCREMENT"){
                return state+1;
                //this state === count below , this will update the value of count
            }
            if(action.type==="DECREMENT"){
                return state-1;
            }


    // Reducer logic will go here
  };


//   reducer = (state, action) 
//         [count, dispatch] 
//    useReducer(reducer, 0);

  //step1 : call  or create the useReducer hook 
  const [count, dispatch] = useReducer(reducer, 0);

  
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100vh',
        backgroundColor: '#f0f8ff', // Light blue background
        fontFamily: 'Arial, sans-serif',
        color: '#333', // Dark text color
        gap: '20px',
      }}
    >
      <h1 style={{ fontSize: '2rem', margin: '0' }}>Count: {count}</h1>
      <div style={{ display: 'flex', gap: '10px' }}>


        <button
//step 3: call the dispatch function 
onClick={()=>dispatch({type:"INCREMENT"})}
          style={{
            padding: '10px 20px',
            fontSize: '1rem',
            backgroundColor: '#4caf50', // Green button
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Increment
        </button>
        <button

        onClick={()=>dispatch({type:"DECREMENT"})}
        // the dispatch here is calling the reducer

          style={{
            padding: '10px 20px',
            fontSize: '1rem',
            backgroundColor: '#f44336', // Red button
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default ReducerComponent;
