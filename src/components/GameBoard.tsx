import React from "react";
import Card from "./Card";

const GameBoard: React.FC = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Card name="Fireball" description="Deal 5 damage to opponent." />
    </div>
  );
};

export default GameBoard;
