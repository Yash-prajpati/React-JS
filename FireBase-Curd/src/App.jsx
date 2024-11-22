import { BrowserRouter, Route, Routes } from "react-router-dom"
import Add from "./pages/Add"
import View from "./pages/View"



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<View />} />
        <Route path="/add" element={<Add />} />
   
      </Routes>
    </BrowserRouter>
  )
}
export default App