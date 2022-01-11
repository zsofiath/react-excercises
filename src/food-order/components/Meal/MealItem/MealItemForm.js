import React, { useRef, useState } from "react";
import Input from "../../UI-elements/Input";
import classes from "./MealItemForm.module.css";

const Mealitemform = (props) => {
  const inputAmountRef = useRef();
  const [amountIsValid, setAmountIsValid] = useState(true);
  const isInvalid = (enteredAmount) => {
    return (
      enteredAmount.trim().length === 0 ||
      +enteredAmount > 5 ||
      +enteredAmount < 1
    );
  };

  const submitEventHandler = (event) => {
    event.preventDefault();
    const enteredAmount = inputAmountRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    if (isInvalid(enteredAmount)) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitEventHandler}>
      <Input
        label="Amount"
        ref={inputAmountRef}
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: 1,
          max: 5,
          step: 1,
          defaultValue: 1,
        }}
      />
      <button>+ Add</button>
    </form>
  );
};

export default Mealitemform;
