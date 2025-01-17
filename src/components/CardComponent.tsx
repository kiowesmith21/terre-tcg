import "./styles/Card.css"
import React from "react";
import { Card as CardType, MinionCard, SpellCard } from "../types/GameTypes";

type Props = {
  card: CardType;
  onPlay: (card: CardType) => void;
};

const Card: React.FC<Props> = ({ card, onPlay }) => {
  // Type Guard: Check if the card is a MinionCard
  const isMinion = (card: CardType): card is MinionCard => {
    return (card as MinionCard).health !== undefined && (card as MinionCard).attack !== undefined;
  };

  return (
    <div className="card" onClick={() => onPlay(card)}>
      <h3>{card.name}</h3>
      <p>{card.description}</p>
      {isMinion(card) ? (
        <>
          <p>Health: {card.health}</p>
          <p>Attack: {card.attack}</p>
        </>
      ) : (
        <p>Effect: {card.effect}</p>
      )}
    </div>
  );
};

export default Card;
