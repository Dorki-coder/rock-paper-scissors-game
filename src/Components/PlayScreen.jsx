import React from "react";
import { useEffect, useState } from "react";
import s from "./PlayScreen.module.css";

function PlayScreen({
  choiceValue,
  scoreValue,
  setScoreValue,
  setChoiceValue,
}) {
  const [houseValue, setHouseValue] = useState("");
  const [counter, setCounter] = useState(3);
  const [isGameEnd, setIsGameEnd] = useState(false);
  const [result, setResult] = useState("");

  const newHousePick = () => {
    const choices = ["rock", "paper", "scissors", "spock", "lizard"];
    setHouseValue(choices[Math.floor(Math.random() * 5)]);
  };
  useEffect(() => {
    newHousePick();
  }, []);

  const Reset = () => {
    setHouseValue("");
    setIsGameEnd(false);
    setResult("");
    setChoiceValue("");
  };

  const Won = () => {
    setResult("YOU WIN");
    setScoreValue(scoreValue + 1);
  };

  const Lose = () => {
    setResult("YOU LOSE");
    setScoreValue(scoreValue - 1);
  };

  const Result = () => {
    if (choiceValue === houseValue) setResult("DRAW");
    else {
      switch (choiceValue) {
        case "rock":
          if (houseValue === "scissors" || houseValue === "lizard") {
            Won();
          } else Lose();
          break;
        case "lizard":
          if (houseValue === "spock" || houseValue === "paper") {
            Won();
          } else Lose();
          break;
        case "spock":
          if (houseValue === "scissors" || houseValue === "rock") {
            Won();
          } else Lose();
          break;
        case "scissors":
          if (houseValue === "paper" || houseValue === "lizard") {
            Won();
          } else Lose();
          break;
        default:
          if (houseValue === "rock" || houseValue === "spck") {
            Won();
          } else Lose();
          break;
      }
    }
    setIsGameEnd(true);
  };

  useEffect(() => {
    const timer =
      counter > 0
        ? setInterval(() => {
            setCounter(counter - 1);
          }, 500)
        : Result();

    return () => {
      clearInterval(timer);
    };
  }, [counter, houseValue]);

  return (
    <div className={s.PlayScreen__wrapper}>
      <div className={s.myChoice}>
        <p>YOU PICKED</p>
        <div className={`icon play__section-${choiceValue}`}></div>
      </div>
      {isGameEnd ? (
        <div className={s.playAgain__wrapper}>
          <h2 className={s.playAgain__title}>{result}</h2>
          <button onClick={Reset} className={s.playAgain__button}>
            PLAY AGAIN
          </button>
        </div>
      ) : null}
      <div className={s.houseChoice}>
        <p>THE HOUSE PICKED</p>
        {isGameEnd ? (
          <div className={`icon play__section-${houseValue}`}></div>
        ) : (
          <div className={s.empty__icon}></div>
        )}
      </div>
    </div>
  );
}

export default PlayScreen;
