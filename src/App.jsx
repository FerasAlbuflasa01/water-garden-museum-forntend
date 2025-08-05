import './App.css'
import {Routes, Route} from 'react-router-dom'

import SignIn from './components/SignIn'
import Home from './components/Home'
import About from './components/About'
import ViewGames from './components/ViewDetails'
import New from './components/New'

const App = () => {

  return (
    <Routes>
      <Route path='/sign-in' element={<SignIn />} />
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/view/games' element={<ViewDetails />} />
      <Route path='/new/games' element={<New />} />
    </Routes>
  )
}

export default App