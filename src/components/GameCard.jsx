import { Link } from 'react-router-dom'
const GameCard = ({ game }) => {
  return (
    <>
      <div className="game-card">
        <img src={game.img} alt={game.name} />
        <h2>{game.name}</h2>
        <br />
        <Link to={`/games/${game._id}`}>
          <button type="submit">Info button</button>
        </Link>
      </div>
    </>
  )
}
export default GameCard
