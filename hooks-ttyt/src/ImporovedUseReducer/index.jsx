import React, { useReducer } from 'react';

const ImprovedReducerComponent = () => {
    const initialState={
        count:0,
    }
  const reducer = (state, action) => {
    // if (action.type === "INCREMENT") {
    //   return state + 1;
    // }
    // if (action.type === "DECREMENT") {
    //   return state - 1;
    // }
    // if (action.type === "RESET") {
    //   return 0;
    // }

     // instead of if we should use switch

    switch(action.type){
        case "INCREMENT":
            return {count: state.count + 1};
        
        case "DECREMENT":
            return {count: state.count - 1};
        
        case "RESET":
            return {count:0};
        
        default :
            return state;
        
    }
  
   
  };

  // const [count, dispatch] = useReducer(reducer, 0);
  // instead of 0  this method is used 
  const [count, dispatch] = useReducer(reducer, initialState);

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
      <h1 style={{ fontSize: '2rem', margin: '0' }}>Count: {count.count}</h1>
      <div style={{ display: 'flex', gap: '10px' }}>
        <button
          onClick={() => dispatch({ type: "INCREMENT" })}
          style={{
            padding: '10px 20px',
            fontSize: '1rem',
            backgroundColor: '#4caf50', // Green button
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.2s, box-shadow 0.2s',
          }}
          onMouseOver={(e) => {
            e.target.style.transform = 'scale(1.1)';
            e.target.style.boxShadow = '0 6px 10px rgba(0, 0, 0, 0.2)';
          }}
          onMouseOut={(e) => {
            e.target.style.transform = 'scale(1)';
            e.target.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
          }}
        >
          Increment
        </button>
        <button
          onClick={() => dispatch({ type: "DECREMENT" })}
          style={{
            padding: '10px 20px',
            fontSize: '1rem',
            backgroundColor: '#f44336', // Red button
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.2s, box-shadow 0.2s',
          }}
          onMouseOver={(e) => {
            e.target.style.transform = 'scale(1.1)';
            e.target.style.boxShadow = '0 6px 10px rgba(0, 0, 0, 0.2)';
          }}
          onMouseOut={(e) => {
            e.target.style.transform = 'scale(1)';
            e.target.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
          }}
        >
          Decrement
        </button>
        <button
          onClick={() => dispatch({ type: "RESET" })}
          style={{
            padding: '10px 20px',
            fontSize: '1rem',
            backgroundColor: '#6839e7', // Purple button
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.2s, box-shadow 0.2s',
          }}
          onMouseOver={(e) => {
            e.target.style.transform = 'scale(1.1)';
            e.target.style.boxShadow = '0 6px 10px rgba(0, 0, 0, 0.2)';
          }}
          onMouseOut={(e) => {
            e.target.style.transform = 'scale(1)';
            e.target.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default ImprovedReducerComponent;
