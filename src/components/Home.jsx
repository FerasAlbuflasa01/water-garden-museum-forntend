
import { useEffect, useState } from "react"
import GameCard from "./GameCard"
import ViewDetails from "./ViewDetails"
import axios from "axios"

const Home = () => {
    const [listOfGames, setListOfGames] = useState([])
    // let { gameId } = useParams()

    useEffect(() => {
        const getGameDetails = async () => {
            const response = await axios.get(`http://localhost:3001/games`)
            setListOfGames(response.data)
            console.log(response.data)
        }
        getGameDetails()

    },[])

    return (
        <>
        {listOfGames.map((game) => (
        <GameCard game={game} key={game._id}/>
        ))}
        {/* {listOfGames.map((game) => (
        <ViewDetails game={game}/>
        ))} */}

        
        </>
    )
}
export default Home

