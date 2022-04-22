import React from "react";
import Card from "./Card";
import ReactDOM from "react-dom";

import css from "./Modal.module.css";

const BackDrop = (props) => {
  return <div className={css.backdrop} onClick={props.hideModal}></div>;
};

const ModalOverlay = (props) => {
  return <Card className={css.Modal}>hi</Card>;
};

const Modal = (props) => {
  return (
    <div>
      {ReactDOM.createPortal(
        <BackDrop hideModal={props.hideModal} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay />,
        document.getElementById("modal-root")
      )}
    </div>
  );
};

export default Modal;
