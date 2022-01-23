import React, { useState } from "react";

const UseInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState(""); //better for instant validation, resetting
  const [isTouched, setIsTouched] = useState(false);
  const enteredValueIsValid = validateValue(enteredValue);
  const hasError = !enteredValueIsValid && isTouched;

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const valueBlurHandler = () => {
    setIsTouched(true);
  };

  const reset = () => {
      setIsTouched(false);
      setEnteredValue('');
  }

  return {
    value: enteredValue,
    isValid: enteredValueIsValid,
    hasError,
    reset,
    valueChangeHandler,
    valueBlurHandler,
  };
};

export default UseInput;
