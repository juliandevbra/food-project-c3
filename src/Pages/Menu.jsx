import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Card from '../Components/Card'

const Menu = () => {
  const [recipes, setRecipes] = useState([])
    
  const apiKey = '68d481a0fbc340308fbf934f836ee8c6'

  const url = 'https://api.spoonacular.com/recipes/random?number=10&apiKey=' + apiKey
 
  console.log(recipes)

  useEffect(() => {
      fetch(url)
      .then(res => res.json())
      .then(data => setRecipes(data.recipes))
  }, [])
  return (
    <div>
       {recipes.map((recipe) => <Card key={recipe.id} recipe={recipe}/>)}
    </div>
  )
}

export default Menu