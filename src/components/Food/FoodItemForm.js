import React, { useRef } from "react";

import css from "./FoodItemForm.module.css";

const FoodItemForm = (props) => {
  const counterRef = useRef();

  const addItemHandler = (event) => {
    event.preventDefault();
    const amount = +counterRef.current.value; // converting to number

    // checking if amount is 0, than ignore
    if (amount === 0) {
      return false;
    }
    //calling on parent add method
    props.addItemHandler(amount);
  };

  return (
    <form className={css.form}>
      <div className={css.Input}>
        <label>Amount:</label>
        <input
          defaultValue={"0"}
          min="0"
          max="5"
          type="number"
          ref={counterRef}
        />
      </div>
      <button type="submit" onClick={addItemHandler}>
        ADD ITEM
      </button>
    </form>
  );
};

export default FoodItemForm;
