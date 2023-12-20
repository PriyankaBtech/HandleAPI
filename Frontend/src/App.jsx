import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'

function App() {

  //const [products, error, loading] = customReactQuery('/api/products')

  const [products, setProducts] = useState([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState('')

  useEffect(() => {
    const controller = new AbortController() // this method cancel the past request automatically
    ;(async() => {
      try {
        setLoading(true)
        setError(false)
        const response = await axios.get('/api/products?search=' + search, {
          signal: controller.signal // handle race condition | latest request
        })
        console.log(response.data) // (5)[{…}, {…}, {…}, {…}, {…}]
        setProducts(response.data)
        setLoading(false)

      } catch (error) {
        // cancel request will handle inside catch
        if (axios.isCancel(error)) {
          console.log("Cancel request", error.message)
          return          
        }
        setError(true)
        setLoading(false)        
      }
    })()

    // CLEANUP METHOD => unmount the component
    return () => {
      controller.abort()
    }

  }, [search]) 
  

  // if (error) {
  //   return <h1>Something went wrong</h1>    
  // }

  // if (loading) {
  //   return <h1>Loading...</h1>    
  // }
  
  return (
    <>
      <h1>API in React</h1>
      <input 
      type="text"
      placeholder='Search'
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      />

      {/* Conditional Rendering */}
      {loading && <h1>Loading...</h1>}
      {error && (<h1>Something went wrong</h1>)}

      <h2>Number of Products are: {products.length}</h2>
    </>
  )
}

export default App


// CUSTOM HOOK FOR API 

// Take parameter
// const customReactQuery = (urlPath) => {
//   const [products, setProducts] = useState([])
//   const [error, setError] = useState(false)
//   const [loading, setLoading] = useState(false)

//   useEffect(() => {
//     ;(async() => {
//       try {
//         setLoading(true)
//         setError(false)
//         const response = await axios.get(urlPath)
//         console.log(response.data) // (5)[{…}, {…}, {…}, {…}, {…}]
//         setProducts(response.data)
//         setLoading(false)

//       } catch (error) {
//         setError(true)
//         setLoading(false)        
//       }
//     })()

//   }, [])

//   return [products, error, loading]  // return {products, error, loading }
//  

// }
