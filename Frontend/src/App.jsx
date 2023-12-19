import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [products, setProducts] = useState([])
  const [error, setError] = useState(false)

  useEffect(() => {
    (async() => {
      try {
        setError(false)
        const response = await axios.get('/api/products')
        console.log(response.data) // (5)[{…}, {…}, {…}, {…}, {…}]
        setProducts(response.data)
      } catch (error) {
        setError(true)        
      }
    })()

  }, [])

  if (error) {
    return <h1>Something went wrong</h1>    
  }

  return (
    <>
      <h1>API in React</h1>
      <h2>Number of Products are: {products.length}</h2>
    </>
  )
}

export default App
