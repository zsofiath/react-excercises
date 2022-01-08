import React from "react";
import classes from './Button.module.css';

const Button = ({onClick, className, children}) => {
  return (
    <>
      <button className={`${classes.btn} ${className}`} onClick={onClick}>
        {children}
      </button>
    </>
  );
};

export default Button;
