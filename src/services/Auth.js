import Client, { BASE_URL } from './api'

export const SignInUser = async (data) => {
  try {

    console.log(data)
    const res = await Client.post(`http://localhost:3001/auth/login`, data)

    // Set the current signed in users token to localStorage
    localStorage.setItem('token', res.data.token)

    return res.data.user
  } catch (error) {
    throw error
  }
}
