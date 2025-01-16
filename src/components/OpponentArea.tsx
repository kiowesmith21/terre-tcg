// With props:
type Props = { name: string }

const OpponentArea: React.FC<Props> = ({ name }) => {
 return <div>{name}</div>
}

export default OpponentArea;