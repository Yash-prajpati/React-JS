import React from 'react'
import { Link } from 'react-router-dom'

export default function View() {
  return (
    <div>
      
          
    <Link to="/"> Add</Link>
    <table>
        <thead>
            <tr>
                <td>name</td>
                <td>phone</td>
            </tr>

        </thead>
        <tbody>
            {
                allrecord.map=((val)=>{
                    const {name,phone}=val
                    return(
                        <tr key={index}>
                            <td>{id}</td>
                            <td>{name}</td>
                            <td>{phone}</td>
                        </tr>
                    )
                })
            }
        </tbody>
    </table>
  

    </div>
  )
}
