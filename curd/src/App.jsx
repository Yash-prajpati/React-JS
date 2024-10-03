import { useState } from "react"

function App() {

  const [task,setTask]=useState("");
  const [alltask,setAllTask]=useState([]);

  const handletask = (e) =>{
    e.preventDefault();
    
    let obj={
      id:Math.floor(Math.random()*1000),
      todo:task,
      sutus:"active"
    }

    
    setAllTask([...alltask,obj]);
   

    setTask("");
    
  }

  

  


  return (
    <>
    <div align="center">
      <h2>Form</h2>
      <form onSubmit={handletask}>
        Task:- <input type="text" onChange={(e)=>setTask(e.target.value)} value={task} />
        <button type="submit">ADD</button>
      </form>
    </div>

    <div>
    <table align="center">
        <thead>
          <tr>
            <th>srno</th>
            <th>Task</th>
            <th>sutus</th>
          </tr>
        </thead>
        <tbody>
          {
            alltask.map((t,i)=>{
              const {id,todo,sutus}=t
              return(
                <>
                
                <tr key={id}>

                  <td>{++i}</td>
                  <td>{todo}</td>
                  <td>
                    
                    <button>{sutus}</button>
                  </td>

                </tr>
                
                </>
              )
            })
          }
        </tbody>
      </table>
    </div>
      
   

    </>
  )
}

export default App
