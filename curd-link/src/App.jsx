import View from "./page/View"
import Add from "./page/Add"
import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"; 


function App() {
  
  return (
    <>

    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Add/>} />
        <Route path="/view" element={<View />} />
      </Routes>
    </BrowserRouter>



   
    </>
  )
}

export default App
