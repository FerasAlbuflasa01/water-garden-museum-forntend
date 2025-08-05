import { useState } from "react"
import { SignInUser } from '../services/Auth'
import { useNavigate } from "react-router-dom"

const SignIn = () => {
    const initialState = { email: '', password: ''}
    let navigate = useNavigate()

    const [signIn, setSignIn]= useState(initialState)
    
    const handleChange = (e) => {
        setSignIn({ ... signIn, [e.target.id]: e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        // const payload = await SignInUser(formValues)
        setSignIn(initialState)
        // setUser(payload)
        navigate('/')
      }
    
    return (
        <form className="sign-in" onSubmit={handleSubmit}>
        <h2>Sign in</h2>
        <label htmlFor="username">Username: </label>
        <input type="text" name="username" placeholder="Enter your username" onChange={handleChange}/>
        <br />
        <br />
        <label htmlFor="password">Password: </label>
        <input type="text" name="password" placeholder="Enter your password" onChange={handleChange}/>
        <br />
        <br />
        <button name="submit">Submit</button>
        </form>
    )
}
export default SignIn 