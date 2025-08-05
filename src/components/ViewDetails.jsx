import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ViewDetails = ({ game }) => {
  const [gameDetails, setGameDetails] = useState({})
  const {gameId} = useParams()
  console.log(gameId)
  useEffect(() => {
    const getGameDetails = async () => {
      const response = await axios.get(`http://localhost:3001/games/${gameId}`)
      console.log("here "+response)
      setGameDetails(response.data)
    }
    getGameDetails()
  }, [])

if(gameDetails){
    return (
    <form className="details">
      <img src={gameDetails.img} alt={gameDetails.name} className="game-image" />
      <h2 name={'game.name'}>{gameDetails.name}</h2>
      <h3 name={'game.price'}>{gameDetails.price}</h3>
      <p name={'game.discreption'}>{gameDetails.discription}</p>
    </form>
  )
}else{
    return <div>Loading...</div>
}

  
}
export default ViewDetails
