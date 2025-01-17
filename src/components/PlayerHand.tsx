import "./styles/PlayerHand.css"
import React from "react";
import { Card } from "../types/GameTypes"; // Import the Card type
import CardComponent from "./CardComponent"; // Import the Card component

type Props = {
  hand: Card[];
  onPlay: (card: Card) => void;
};

const PlayerHand: React.FC<Props> = ({ hand, onPlay }) => {
  return (
    <div className="player-hand">
      {hand.map((card) => (
        <CardComponent key={card.id} card={card} onPlay={onPlay} />
      ))}
    </div>
  );
};

export default PlayerHand;
