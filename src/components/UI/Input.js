import React from "react";

import css from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={css.Input}>
      <label>{props.label}</label>
      <input type={props.type} />
    </div>
  );
};

export default Input;
