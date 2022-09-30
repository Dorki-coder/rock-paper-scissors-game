import React from "react";
import s from "./SelectionScreen.module.css";

import pentagon from "../images/bg-pentagon.svg";

function SelectionScreen({ setChoiceValue }) {
  return (
    <div className="container">
      <div className={s.pentagon__wrapper}>
        <img className={s.pentagon} src={pentagon} alt="pentagon"></img>
        <div
          onClick={() => setChoiceValue("scissors")}
          className={`icon ${s.scissors}`}
        ></div>
        <div
          onClick={() => setChoiceValue("rock")}
          className={`icon ${s.rock}`}
        ></div>
        <div
          onClick={() => setChoiceValue("paper")}
          className={`icon ${s.paper}`}
        ></div>
        <div
          onClick={() => setChoiceValue("lizard")}
          className={`icon ${s.lizard}`}
        ></div>
        <div
          onClick={() => setChoiceValue("spock")}
          className={`icon ${s.spock}`}
        ></div>
      </div>
    </div>
  );
}

export default SelectionScreen;
