import './App.css'
import {Routes, Route} from 'react-router-dom'

import Home from './components/Home'
import About from './components/About'
import ViewGames from './components/ViewGames'
import New from './components/New'

const App = () => {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/view/games' element={<ViewGames />} />
      <Route path='/new/games' element={<New />} />
    </Routes>
  )
}

export default App