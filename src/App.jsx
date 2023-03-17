import { useState } from 'react'
import './App.css'
import Home from './Components/Home'
import PokeApi from './Components/pokeApi'
import RandomCat from './Components/RandomCat'
import SimpsonsApi from './Components/SimpsonsApi'
import User from './Components/User'


function App() {

  return (
    <div className="App">
      {/* <RandomCat/> */}
      {/* <Home/> */}
      {/* <SimpsonsApi/> */}
      <User/>
      {/* <PokeApi/> */}
    </div>
  )
}

export default App
