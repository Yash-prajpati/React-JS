import { useState } from "react"

function App() {

  const [add,setAdd]=useState([
    { Name:"",Phone:"" }
  ]);

  const newAdd=()=>{
      new {
      Name:"" ,
      Phone:""
    }
  }

  return (
    <>
    <div align="center">
      <h1>Dynamic form</h1>
      Name: <input type="text" />
      Phone: <input type="text" /><br />
      <button onClick={()=>newAdd()}>+</button>
    </div>
    </>
  )
}

export default App
