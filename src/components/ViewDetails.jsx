import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Client, { BASE_URL } from '../services/api'
const ViewDetails = ({ game, admin }) => {
  console.log(admin)
  let navigate = useNavigate()
  const [gameDetails, setGameDetails] = useState({})
  const { gameId } = useParams()
  useEffect(() => {
    const getGameDetails = async () => {
      const response = await axios.get(`${BASE_URL}/games/${gameId}`)
      console.log('here ' + response)
      setGameDetails(response.data)
    }
    getGameDetails()
  }, [])
  const handelClick = async () => {
    let response = await Client.delete(`${BASE_URL}/games/${gameDetails._id}`)
    navigate('/')
  }
  if (gameDetails) {
    return (
      <div className="details">
        <img
          src={gameDetails.img}
          alt={gameDetails.name}
          className="game-image"
        />
        <h2 name={'game.name'}>{gameDetails.name}</h2>
        <h3 name={'game.price'}>{gameDetails.price}</h3>
        <p name={'game.discreption'}>{gameDetails.discreption}</p>
        {admin ? <button onClick={handelClick}>delete</button> : null}
      </div>
    )
  } else {
    return <div>Loading...</div>
  }
}
export default ViewDetails
