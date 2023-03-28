import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import ChildComponent from './Clase 19/ChildComponent'
import LoboEstepario from './Clase 19/LoboEstepario'
import ParentComponent from './Clase 19/ParentComponent'
import Deserts from './Components/Deserts'
import LoginForm from './Components/LoginForm'
import Navbar from './Components/Navbar'
import Vegetarian from './Components/Vegetarian'
import Veggie from './Components/Veggie'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Home from './Pages/Home'
import Menu from './Pages/Menu'
import NotFound from './Pages/NotFound'
import RecipeDetail from './Pages/RecipeDetail'

function App() {

  // const [recipes, setRecipes] = useState([])
    
  // const apiKey = '68d481a0fbc340308fbf934f836ee8c6'

  // const url = 'https://api.spoonacular.com/recipes/random?number=10&apiKey=' + apiKey
 
  // console.log(recipes)

  // useEffect(() => {
  //     fetch(url)
  //     .then(res => res.json())
  //     .then(data => setRecipes(data.recipes))
  // }, [])


  return (
    <div className="App">
        <ParentComponent />
        <LoboEstepario />


      {/* <Navbar/>
      <h1>Bienvenidos a Menues DH</h1>
      <Routes>
        <Route path='/' element={<Home/>}>
          <Route path='/vegetariano' element={<Vegetarian/>}>
            <Route path='/vegetariano/veggie' element={<Veggie/>}/>
          </Route>
          <Route path='/postres' element={<Deserts/>}/>
        </Route>
        <Route path='/menu' element={<Menu recipes={recipes}/>}/>
        <Route path='/recipe/:id' element={<RecipeDetail recipes={recipes}/>}/> 
        <Route path='/contacto' element={<Contact/>}/>
        <Route path='/acerca' element={<About/>}/>
        <Route path='*' element={<NotFound/>}/>
        
      </Routes> */}

    </div>
  )
}

export default App
