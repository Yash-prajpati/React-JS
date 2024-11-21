import { BrowserRouter, Route, Routes } from "react-router-dom"




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<View/>} />
        <Route path="/Add" element={<Add />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App