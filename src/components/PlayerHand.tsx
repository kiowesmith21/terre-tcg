type Props = {
    name: string 
};

const PlayerHand: React.FC<Props> = ({ name = "Player"}) => {
  return <div>{name}</div>;
};

export default PlayerHand;
