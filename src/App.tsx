import "./App.css";
import React from "react";
import PlayerHand from "./components/PlayerHand";
import OpponentArea from "./components/OpponentArea";
import GameBoard from "./components/GameBoard";

const App: React.FC = () => {
  return (
    <div className="app-container">
      <OpponentArea name={""} />
      <GameBoard name={""} />
      <PlayerHand name="Your Hand" />
    </div>
  );
};

export default App;
