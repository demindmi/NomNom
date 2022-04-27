import React, { useRef, useState } from "react";

import css from "./FoodItemForm.module.css";

const FoodItemForm = (props) => {
  const [formValid, setFormValid] = useState(false);
  const counterRef = useRef();

  const onChangeHandler = () => {
    if (counterRef.current.value > 0) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  };

  const addItemHandler = (event) => {
    const amount = +counterRef.current.value;
    event.preventDefault();
    if (amount > 0) {
      props.addItemHandler(amount);
    }
  };

  return (
    <form className={css.form}>
      <div className={css.Input}>
        <label>AMOUNT</label>
        <input
          placeholder="0"
          min="0"
          max="5"
          type="number"
          ref={counterRef}
          onChange={onChangeHandler}
        />
      </div>
      <button
        type="submit"
        disabled={!formValid}
        className={formValid ? css.enabled : ""}
        onClick={addItemHandler}>
        ADD ITEM
      </button>
    </form>
  );
};
export default FoodItemForm;
