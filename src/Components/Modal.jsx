import React from "react";
import close from "../images/icon-close.svg";
import rules from "../images/image-rules-bonus.svg";
import s from "./Modal.module.css";

const Modal = ({ toggle }) => {
  return (
    <div className={s.modal__container}>
      <div className={s.modal__box}>
        <div className={s.modal__header}>
          <p className={s.modal__title}>Rules</p>
          <button className={s.close__button} onClick={toggle}>
            <img src={close} alt="Close" srcset="" />
          </button>
        </div>
        <img src={rules} alt="Rules" srcset="" />
      </div>
    </div>
  );
};

export default Modal;
