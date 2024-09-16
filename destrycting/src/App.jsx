
function App() {
 

  let obj = {
    name: "yash",
    age : 20,
    study : "12th",
    state:[
      { name:"india"},
      { name : "canada"}
    ]
  }

  console.log(obj);

  return (
    <div>
    <h1>{obj.name}</h1>
    <h1>{obj.age}</h1>
    <h1>{obj.study}</h1>


    {
      obj.state.map=((state,index)=>{
        console.log(obj.state.name);
      })
    }
    </div>
  )

}

export default App
