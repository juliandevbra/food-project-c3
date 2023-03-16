import React, { useEffect, useState } from 'react'

const RandomCat = () => {
    const [gatito, setGatito] = useState([{}])
    const [cambiarGatito, setCambiarGatito] = useState(false)

    const url = 'https://api.thecatapi.com/v1/images/search'

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => setGatito(data))
    }, [cambiarGatito])
   
    console.log(gatito)

  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
        <img src={gatito[0].url} alt="" width={300}/>
        <button onClick={() => setCambiarGatito(!cambiarGatito)}>Cambiar de gatito</button>
    </div>
  )
}

export default RandomCat