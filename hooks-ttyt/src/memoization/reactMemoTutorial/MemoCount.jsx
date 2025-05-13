import React, { memo, useRef } from 'react'


const MemoCount = ({bioData}) => {

    const renderCount =useRef(0);
    console.log(renderCount);
  return (
    <div>
      <p>
        nothing changed here but i have now rendered: 
        <span> {renderCount.current++} time(s)</span>
      </p>
      <p>my bio data :  {bioData.name}</p>

    </div>
  )
}


//
// react.memo() is a higher-order component tat we use to wrap 
// component that we do dont want to rerender unless props with in them changed
export default memo( MemoCount);
