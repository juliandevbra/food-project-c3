import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Deserts from './Components/Deserts'
import Navbar from './Components/Navbar'
import Vegetarian from './Components/Vegetarian'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Home from './Pages/Home'
import Menu from './Pages/Menu'
import NotFound from './Pages/NotFound'

function App() {

  return (
    <div className="App">
      <Navbar/>
      <h1>Bienvenidos a Menues DH</h1>
      <Routes>
        <Route path='/' element={<Home/>}>
          <Route path='/vegetariano' element={<Vegetarian/>}/>
          <Route path='/postres' element={<Deserts/>}/>
        </Route>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/contacto' element={<Contact/>}/>
        <Route path='/acerca' element={<About/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>

    </div>
  )
}

export default App
