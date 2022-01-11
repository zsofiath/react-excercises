import React, {useRef} from "react";
import Input from "../../UI-elements/Input";
import classes from "./MealItemForm.module.css";

const Mealitemform = (props) => {
    const inputAmountRef = useRef();
  return (
    <form className={classes.form}>
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
