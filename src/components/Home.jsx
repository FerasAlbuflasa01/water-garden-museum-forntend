import { useEffect, useState } from 'react'
import GameCard from './GameCard'
import ViewDetails from './ViewDetails'
import axios from 'axios'
import { BASE_URL } from '../services/api'

const Home = () => {
  const [listOfGames, setListOfGames] = useState([])

  useEffect(() => {
    const getGameDetails = async () => {
      const response = await axios.get(`${BASE_URL}/games`)
      setListOfGames(response.data)
      console.log(response.data)
    }
    getGameDetails()
  }, [])

  return (
    <>
      <div className="list-games">
        {listOfGames.map((game) => (
          <GameCard game={game} key={game._id} />
        ))}
      </div>
    </>
  )
}
export default Home
