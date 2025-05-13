import React from "react";

const Button = (props) => {

  const { title,varient ,onButtonClick ,type}=props;


  const baseStyle =  " rounded-lg hover:cursor-pointer px-4 py-2 text-xl font-medium text-white rounded-lg shadow-md hover:shadow-lg transition-transform duration-300";


  const varientStyles={
    edit:"bg-green-600 hover:bg-green-600",
    delete:"bg-red-400 hover:bg-red-600",
  }
  return (
    <div>
      <button onClick={onButtonClick}  type={type || 'button'} className={`${baseStyle} ${varientStyles[varient]}`}>
        {title}
      </button>
    </div>
  );
};

export default Button;
