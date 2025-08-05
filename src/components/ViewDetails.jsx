const ViewDetails = () => {

    return (
        <form className="details" >
            <img src="https://media.alwasatnews.com/data/2016/5096/images/loc-8.jpg" alt="game.image" className="game-image" />
            <h2 name={'game.name'}>Name</h2>
            <h3 name={'game.price'}>Price</h3>
            <p name={'game.discreption'}>Discreption</p>
        </form>
    )
}
export default ViewDetails