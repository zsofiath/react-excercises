import React from "react";
import classes from './Button.module.css';

const Button = ({text, onClick, className}) => {
    console.log(className);
  return (
    <>
      <button className={`${classes.btn} ${className}`} onClick={onClick}>
        {text}
      </button>
    </>
  );
};

export default Button;
