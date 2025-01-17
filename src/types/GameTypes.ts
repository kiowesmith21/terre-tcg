    export interface Player {
    id: number;
    name: string;
    hand: Card[];
    health: number;
    deck: Card[];
  }

  export type MinionCard = {
    id: number;
    name: string;
    description: string;
    type: "minion";
    health: number;
    attack: number;
    effect: string; // We will use this for additional effects (e.g., "summon", "taunt")
  };
  
  export type SpellCard = {
    id: number;
    name: string;
    description: string;
    type: "spell";
    effect: string; // Effects like "damage", "heal", "buff"
  };
  
  export type Card = MinionCard | SpellCard; // Union type for either MinionCard or SpellCard
  