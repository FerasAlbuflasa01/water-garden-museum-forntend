import Client, { BASE_URL } from './api'

export const NewGame = async (data) => {
  try {

    console.log(data)
    const res = await Client.post(`http://localhost:3001/games/new`, data)

    // Set the current signed in users token to localStorage
    localStorage.setItem('token', res.data.token)

    return null
  } catch (error) {
    throw error
  }
}
