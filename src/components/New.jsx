import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { NewGame } from '../services/NewGame'

const New = ({ admin }) => {
  const initialState = { name: '', price: '', img: '', discreption: '' }

  let navigate = useNavigate()

  const [creatGame, setCrreatGame] = useState(initialState)

  const handleChange = (e) => {
    setCrreatGame({ ...creatGame, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = await NewGame(creatGame)
    console.log(payload)
    setCrreatGame(initialState)
    navigate('/')
  }

  if (admin) {
    return (
      <div className='new-game-page'>
      <div className='new-game' >
        <h1>Add A New Game Listing</h1>
        <form className="add-game" onSubmit={handleSubmit}>
          <input
            type="text"
            name={'name'}
            placeholder={'name'}
            value={creatGame.name}
            onChange={handleChange}
          />
          <input
            type="text"
            name={'price'}
            placeholder={'price'}
            value={creatGame.price}
            onChange={handleChange}
          />
          <input
            type="text"
            name={'img'}
            placeholder={'image'}
            value={creatGame.img}
            onChange={handleChange}
          />
          <textarea
            name={'discreption'}
            placeholder={'discreption'}
            value={creatGame.discreption}
            onChange={handleChange}
            className="text-area"
            cols="30"
            rows="10"
            autoComplete="off"
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
      </div>
    )
  } else {
    return (
      <>
        <h3>unathorized</h3>
      </>
    )
  }
}
export default New
