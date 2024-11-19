import { useEffect } from "react"

function App() {  

  useEffect(()=>{
    fetch(dummyjson.com/test)
    .then(res => res.json())
    .then(console.log);
  })


  return (
   <>

      <h1>Cart Api</h1>

   </>
  )
}

export default App
