
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deletUser } from '../Redux/Action/action';

function View() {
  const user = useSelector(state => state.curd.userData)
  console.log(user);
  const dispacth = useDispatch()

  const deletDate = (id) => {
     dispacth(deletUser(id))
  }

  return (
    <>
      <div align="center">
        <table border={1}>
          <tr>
            <td>Title</td>
            <td>Notes</td>
            <td>acton</td>
          </tr>
          <tbody>
            {
              user.map((val) => {
                return (
                  <tr>
                    <td>{val.name}</td>
                    <td>{val.phone}</td>
                    <td><button onClick={() => deletDate(val.id)}>delet</button></td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>

        <Link to={"/Add"}>Add +</Link>
      </div>
    </>
  )
}

export default View
