import React from "react";
import ReactDom from "react-dom";
import classes from "./Modal.module.css";

function ModalBackdrop({onClick}) {
  return <div onClick={onClick} className={classes.backdrop}></div>;
}

function ModalOverlay(props) {
  return (
    <div>
      <div className={classes.modal}>{props.children}</div>
    </div>
  );
}

const Modal = (props) => {
  return (
    <>
      {ReactDom.createPortal(<ModalBackdrop onClick={props.onClickBackdrop} />, document.getElementsByTagName('body')[0] )}
      {ReactDom.createPortal(<ModalOverlay> {props.children}</ModalOverlay>, document.getElementsByTagName('body')[0] )}
    </>
  );
};

export default Modal;
