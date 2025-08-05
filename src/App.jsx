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

    <>
    

      <Header />

    <main>

    <Routes>
      <Route path="/sign-in" element={<SignIn setAdmin={setAdmin} />} />
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/game/new" element={<New />} />
      <Route path="/view/games" element={<ViewDetails />} />

    </Routes>

    </main>

    
    </>
    


  )
}

export default App
