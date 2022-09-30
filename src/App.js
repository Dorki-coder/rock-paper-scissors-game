import "./App.css";
import React, { useState } from "react";
import Header from "./Components/Header";
import SelectionScreen from "./Components/SelectionScreen";
import PlayScreen from "./Components/PlayScreen";
import Footer from "./Components/Footer";

function App() {
  const [scoreValue, setScoreValue] = useState(0);
  const [choiceValue, setChoiceValue] = useState("");

  return (
    <div className="App">
      <Header scoreValue={scoreValue}></Header>
      {choiceValue.length > 0 ? (
        <PlayScreen
          scoreValue={scoreValue}
          setScoreValue={setScoreValue}
          choiceValue={choiceValue}
          setChoiceValue={setChoiceValue}
        ></PlayScreen>
      ) : (
        <SelectionScreen setChoiceValue={setChoiceValue}></SelectionScreen>
      )}
      <Footer />
    </div>
  );
}

export default App;
