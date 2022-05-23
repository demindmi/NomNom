import React from "react";
import Card from "./Card";
import ReactDOM from "react-dom";

import css from "./Modal.module.css";

const BackDrop = (props) => {
  return <div className={css.backdrop} onClick={props.onClick}></div>;
};

const ModalOverlay = (props) => {
  return <Card className={css.Modal}>{props.children}</Card>;
};

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <BackDrop onClick={props.onClick} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay onClick={props.onClick}>{props.children}</ModalOverlay>,
        document.getElementById("modal-root")
      )}
    </>
  );
};

export default Modal;
