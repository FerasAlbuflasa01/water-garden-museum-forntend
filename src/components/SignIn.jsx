import { useState } from 'react'
import { SignInUser } from '../services/Auth'
import { useNavigate } from 'react-router-dom'

const SignIn = ({ setAdmin }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  let navigate = useNavigate()

  const handleChange = (e) => {
    if (e.target.name === 'username') {
      setUsername(e.target.value)
    } else {
      setPassword(e.target.value)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    let formValues = {
      username: username,
      password: password
    }
    const payload = await SignInUser(formValues)
    setPassword('')
    setUsername('')
    setAdmin(payload)
    navigate('/')
  }

  return (
    <form className="sign-in" onSubmit={handleSubmit}>
      <h2>Sign in</h2>
      <label htmlFor="username">Username: </label>
      <input
        type="text"
        name="username"
        placeholder="Enter your username"
        value={username}
        onChange={handleChange}
      />
      <br />
      <br />
      <label htmlFor="password">Password: </label>
      <input
        type="text"
        name="password"
        placeholder="Enter your password"
        value={password}
        onChange={handleChange}
      />
      <br />
      <br />
      <button name="submit">Submit</button>
    </form>
  )
}
export default SignIn
