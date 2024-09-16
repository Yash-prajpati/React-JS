import Users from "./Users"


function App() {
 
  const users = [
  {id:1,name:"yash", age:18 },
  {id:2,name:"raj",age:19},
  {id:3,name:"natik",age:20},
];


  return (
    <>
     <Users yash={users}/>
    </>
  )
}

export default App
