import { useState } from "react"
import { useNavigate } from "react-router-dom"

const SignIn = () => {
    const {signIn, setSignIn} = useState(null)
    

    return (
        <div className="sign-in">
        <h2>Sign in</h2>
        <label htmlFor="username">Username: </label>
        <input type="text" name="username" placeholder="Enter your username" />
        <br />
        <br />
        <label htmlFor="password">Password: </label>
        <input type="text" name="password" placeholder="Enter your password" />
        <br />
        <button name="submit">Submit</button>
        </div>
    )
}
export default SignIn 