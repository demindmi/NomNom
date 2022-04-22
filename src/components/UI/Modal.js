import React from "react";
import Card from "./Card";

import css from "./Modal.module.css";

const Modal = (props) => {
  return (
    <>
      <div className={css.backdrop}></div>
      <Card className={css.Modal}>{props.children}</Card>
    </>
  );
};

export default Modal;
