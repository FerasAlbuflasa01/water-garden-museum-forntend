import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const New = () => {
  const initialState = { name: '', price: '', image: '', description: '' }

  let navigate = useNavigate()

  const [creatGame, setCrreatGame] = useState(initialState)

  const handleChange = (e) => {
    setCrreatGame({ ...creatGame, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
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
          onChange={handleChange}
        />
        <input
          type="text"
          name={'price'}
          placeholder={'price'}
          onChange={handleChange}
        />
        <input
          type="text"
          name={'img'}
          placeholder={'image'}
          onChange={handleChange}
        />
        <input
          type="text-area"
          name={'description'}
          placeholder={'description'}
          onChange={handleChange}
        />
        <button name='submit'>Submit</button>
      </form>
    </div>
  )
}
export default New
