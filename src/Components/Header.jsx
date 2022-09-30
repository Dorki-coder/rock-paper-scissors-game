import s from "./Header.module.css";
import React from "react";
import logo from "../images/logo-bonus.svg";

function Header({ scoreValue }) {
  return (
    <header>
      <div className={s.logo}>
        <img src={logo} alt="logo" />
      </div>
      <div className={s.score__card}>
        <div className={s.score__title}>SCORE</div>
        <div className={s.score__value}>{scoreValue}</div>
      </div>
    </header>
  );
}

export default Header;
