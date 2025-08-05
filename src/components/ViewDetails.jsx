
const ViewDetails = ({ game }) => {
   
    return (
        <form className="details" >
            <img src={ game.img } alt={game.name} className="game-image" />
             {/* image is an example */}
            <h2 name={'game.name'} >{game.name}</h2>
            <h3 name={'game.price'}>{game.price}</h3>
            <p name={'game.discreption'}>{ game.discription}</p>
        </form>
    )
}
export default ViewDetails