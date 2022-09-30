import React from "react";
import s from "./SelectionScreen.module.css";
import { Link } from "react-router-dom";

import pentagon from "../images/bg-pentagon.svg";

function SelectionScreen({ setChoiceValue }) {
  return (
    <div className="container">
      <div className={s.pentagon__wrapper}>
        <img className={s.pentagon} src={pentagon} alt="pentagon"></img>
        <Link
          onClick={() => setChoiceValue("scissors")}
          className={`icon ${s.scissors}`}
        ></Link>
        <Link
          onClick={() => setChoiceValue("rock")}
          className={`icon ${s.rock}`}
        ></Link>
        <Link
          onClick={() => setChoiceValue("paper")}
          className={`icon ${s.paper}`}
        ></Link>
        <Link
          onClick={() => setChoiceValue("lizard")}
          className={`icon ${s.lizard}`}
        ></Link>
        <Link
          onClick={() => setChoiceValue("spock")}
          className={`icon ${s.spock}`}
        ></Link>
      </div>
    </div>
  );
}

export default SelectionScreen;
