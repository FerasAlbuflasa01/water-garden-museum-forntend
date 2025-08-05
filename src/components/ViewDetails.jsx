import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

const ViewDetails = () => {
    const [viewDetails, setViewDetails] = useState({})
    let { gameId } = useParams()

    useEffect(() => {
        const getGameDetails = async () => {
            const response = await axios.get(
                // `${BASE_URL}/${gameId}?key=${API_KEY}`
                )
        }
    })

    return (
        <form className="details" >
            <img src="https://media.alwasatnews.com/data/2016/5096/images/loc-8.jpg" alt="game.image" className="game-image" />
             {/* image is an example */}
            <h2 name={'game.name'}>Name</h2>
            <h3 name={'game.price'}>Price</h3>
            <p name={'game.discreption'}>Discreption</p>
        </form>
    )
}
export default ViewDetails