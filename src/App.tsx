import "./App.css";
import React from "react";
import OpponentArea from "./components/OpponentArea";
import GameBoard from "./components/GameBoard";

const App: React.FC = () => {
  return (
    <div className="app-container">
      <OpponentArea name={""} />
      <GameBoard />
    </div>
  );
};

export default App;
