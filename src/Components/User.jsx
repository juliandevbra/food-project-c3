import axios from 'axios'
import React, { useEffect, useState } from 'react'

const User = () => {

  const [user, setUser] = useState({})
  const url = 'https://randomuser.me/api/'

  useEffect(()=>{
    axios(url)
    .then(({data}) => setUser(data.results[0]))
  },[])

  return (
    <div>
          <>
            <h2>{user.name?.title} {user.name?.first} {user.name?.last}</h2>
            <img src={user.picture?.large} alt="" />
            <p>age: {user.dob?.age}</p>
            <p>gender: {user.gender}</p>
          </>
    </div>
  )
}

export default User