import "./styles/GameBoard.css";
import React, { useState } from "react";
import PlayerHand from "./PlayerHand";
import { Card, MinionCard } from "../types/GameTypes";
import CardComponent from "./CardComponent"; // Importing the CardComponent

// Sample deck
const sampleDeck: Card[] = [
  {
    id: 1,
    name: "Fireball",
    description: "Deal 5 damage",
    type: "spell",
    effect: "damage",
  },
  {
    id: 2,
    name: "Healing Potion",
    description: "Heal 5 health",
    type: "spell",
    effect: "heal",
  },
  {
    id: 3,
    name: "Goblin",
    description: "A small minion",
    type: "minion",
    health: 3,
    attack: 2,
    effect: "summon",
  },
];

const GameBoard: React.FC = () => {
  const [deck, setDeck] = useState<Card[]>(sampleDeck);
  const [hand, setHand] = useState<Card[]>([]);

  // Player and opponent minions state
  const [playerMinions, setPlayerMinions] = useState<MinionCard[]>([]);
  const [opponentMinions, setOpponentMinions] = useState<MinionCard[]>([
    {
      id: 4,
      name: "Orc",
      description: "A tough opponent minion",
      type: "minion",
      health: 5,
      attack: 3,
      effect: "attack",
    },
  ]);

  // Draw a single card and add it to the hand
  const drawCard = () => {
    if (deck.length > 0) {
      const drawnCard = deck[0]; // Get the first card from the deck
      setHand([...hand, drawnCard]); // Add it to the hand
      setDeck(deck.slice(1)); // Remove the drawn card from the deck
    }
  };

  // Play a card (e.g., add a minion to the player's side)
  const playCard = (card: Card) => {
    if (card.type === "minion") {
      const minionCard = card as MinionCard;

      // Check if the minion is already on the board
      if (!playerMinions.some((minion) => minion.id === minionCard.id)) {
        setPlayerMinions([...playerMinions, minionCard]);
        setHand(hand.filter((h) => h.id !== card.id)); // Remove the card from hand
      }
    }
  };

  return (
    <div className="game-board">
      <button onClick={drawCard}>Draw Card</button>

      <h3>Opponent's Minions</h3>
      {/* Render Opponent's Minions */}
      <div className="opponent-minions">
        {opponentMinions.map((minion) => (
          <CardComponent key={minion.id} card={minion} onPlay={playCard} />
        ))}
      </div>

      <h3>Player's Minions</h3>
      {/* Render Player's Minions */}
      <div className="player-minions">
        {playerMinions.map((minion) => (
          <CardComponent key={minion.id} card={minion} onPlay={playCard} />
        ))}
      </div>


      {/* Render Player's Hand */}
      <PlayerHand hand={hand} onPlay={playCard} />
    </div>
  );
};

export default GameBoard;
