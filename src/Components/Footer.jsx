import React, { useState } from "react";
import Modal from "./Modal";
import s from "./Footer.module.css";

const Footer = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => {
    setModal(!modal);
  };

  return (
    <>
      <footer className={s.footer}>
        <div className={s.attribution}>
          Challenge by{" "}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            rel="noopener noreferrer"
          >
            Frontend Mentor
          </a>
          . Coded by <a href="https://github.com/Dorki-coder">Dorki-coder</a>.
          <a href="https://github.com/Dorki-codsr">Dorki-coder</a>.
        </div>
        <button className={s.rules__button} onClick={toggle}>
          Rules
        </button>
      </footer>
      {modal ? <Modal toggle={toggle} /> : null}
    </>
  );
};

export default Footer;
