import React, { useEffect, useState } from 'react'

const FuncComponent = ({titulo}) => {
    const [name, setName] = useState('Jose')
    const [count, setCount] = useState(0)

    useEffect(() => {
       console.log('Se montó el componente de función')
       setTimeout(() => {
            setName('Laura')
       }, 2000)
       return () => {
           console.log('Se desmontó el componente de función')
       }
    }, [])

    useEffect(() => {
        console.log('Se actualizó count dentro del componente de función')
    }, [count])
    
    console.log('Se renderizó el componente de función')

  return (
    <div>
        <h1>{titulo}</h1>
        <h3>{name}</h3>
        <button onClick={()=> setCount(count+1)}>+</button>
        <h3>{count}</h3>
        <button onClick={()=> setCount(count-1)}>-</button>
    </div>
  )
}

export default FuncComponent