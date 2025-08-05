import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { NewGame } from '../services/NewGame'

const New = () => {
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

  return (
    <div>
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
        <input
          type="text-area"
          name={'discreption'}
          placeholder={'discreption'}
          value={creatGame.discreption}
          onChange={handleChange}
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}
export default New
