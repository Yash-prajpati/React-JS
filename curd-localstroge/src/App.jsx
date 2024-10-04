import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useState } from 'react';


function App() {

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [alltask, setAlltask] = useState([]);

  const handelbar = (e) => {
    e.preventDefault()

    let obj = {
      id: Math.floor(Math.random() * 1000),
      name: name,
      phone: phone
    }

    let up = [...oldtask,obj];
    setAlltask(up);

  }

  return (
    <>

      <div className="container">
        <div className="row">

        

          <div className="box" style={{ width: "40%", padding: "40px", marginTop: "30px", boxShadow: "1px 0px 20px 1px #dddddd", borderRadius: "10px" }}  >
            <form onSubmit={handelbar}>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Name</label>
                <input type="text" class="form-control" onChange={(e) => setName(e.target.value)} value={name} />
              </div>
              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Phone</label>
                <input type="text" class="form-control" id="exampleInputPassword1" onChange={(e) => setPhone(e.target.value)} value={phone} />
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>

          <div className="box" style={{ width: "50%", padding: "40px", marginTop: "30px", marginLeft: "40px", boxShadow: "1px 0px 20px 1px #dddddd", borderRadius: "10px" }}>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>

                </tr>
              </thead>
              <tbody>
                {
                  alltask.map((val) => {
                    return (
                      <>
                        <tr key={id}>
                          <th scope="row">{val.id}</th>
                          <td>{val.name}</td>
                          <td>{val.phone}</td>
                        </tr>
                      </>
                    )
                  })
                }
              </tbody>
            </table>
          </div>

        </div>
      </div>




    </>
  )
}

export default App
