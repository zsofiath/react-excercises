import React, { useState } from "react";

const UseValidation = (validation) => {
  const [value, setValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);
  const isValid = validation(value);
  const isInvValid = !isValid && isTouched;

  const onNameChangeHandler = (event) => {
    setValue(event.target.value);
  };

  const onNameBlurHandler = () => {
    setIsTouched(true);
  };

  const reset = () => {
      setIsTouched(false);
      setValue('');
  }

  return {
    value,
    isValid,
    isInvValid,
    reset,
    onNameChangeHandler,
    onNameBlurHandler,
  };
};

export default UseValidation;
