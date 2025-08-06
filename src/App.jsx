import './App.css'
import { Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Client, { BASE_URL } from './services/api'

import SignIn from './components/SignIn'
import Home from './components/Home'
import About from './components/About'
import ViewDetails from './components/ViewDetails'
import New from './components/New'
import Header from './components/Header'
import { CheckSession } from './services/Auth'

const App = () => {
  const [admin, setAdmin] = useState(null)
  const checkToken = async () => {
    let currentAdmin = await CheckSession()
    const token = localStorage.getItem('token')
    if (token) {
      setAdmin(currentAdmin)
    }
  }
  useEffect(() => {
    checkToken()
  }, [])
  const handleLogOut = () => {
    setAdmin(null)
    localStorage.clear()
  }
  return (
    <>
    <title>AL-Ma'aeeya Park - Bahrain</title>
      <header>
        <Header handleLogOut={handleLogOut} admin={admin} />
      </header>

      <main>
        <Routes>
          <Route path="/sign-in" element={<SignIn setAdmin={setAdmin} />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/games/new" element={<New admin={admin} />} />
          <Route
            path="/games/:gameId"
            element={<ViewDetails admin={admin} />}
          />
        </Routes>
      </main>
    </>
  )
}

export default App
