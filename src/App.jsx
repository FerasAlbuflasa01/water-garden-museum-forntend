import './App.css'
import { Routes, Route } from 'react-router-dom'

import SignIn from './components/SignIn'
import Home from './components/Home'
import About from './components/About'
import ViewGames from './components/ViewDetails'
import New from './components/New'
import { useEffect, useState } from 'react'
import Client, { BASE_URL } from './services/api'

const App = () => {
  const [admin, setAdmin] = useState(null)
  const checkToken = async () => {
    const token = localStorage.getItem('token')
    if (token) {
      let admin = Client.get(`http://localhost:3001/auth/session`)
      setAdmin(admin)
    }
  }
  useEffect(() => {
    checkToken()
  }, [])

  return (
    
    <Routes>
      <Route path="/sign-in" element={<SignIn setAdmin={setAdmin} />} />
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/view/games" element={<ViewGames />} />
      <Route path="/game/new" element={<New />} />

    </Routes>

    

  )
}

export default App
