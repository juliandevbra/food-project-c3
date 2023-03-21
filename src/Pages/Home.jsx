import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'


const Home = () => {
   
   
  return (
    <div>
         <h1>Este es el catalogo de menues</h1>
            <Link to='/vegetariano'><h3>Vegetarianos</h3></Link>
            <Link to='/postres'><h3>Postres</h3></Link>
            <Outlet/>
    </div>
  )
}

export default Home