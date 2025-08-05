const GameCard = ({ game }) => {
    return (
        <>
        <form className="game-card">
            <img src={ game.img } alt={game.name} />
            {/* image is an example */}
            <h2>{ game.name }</h2>
            <br />
            <button type="submit">Info button</button>
        </form>
        </>
    )
} 
export default GameCard