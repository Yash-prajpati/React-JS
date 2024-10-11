import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Add() {

    const [name,setName]=useState("");
    const [phone,setPhone]=useState("");
    const [allrecord,setAllRecord]=useState([]);

    const handlbar =(e)=>{
        e.preventDefault();


        let obj ={
            id :Math.floor(Math.random()*10000),
            name:name,
            phone:phone
        }

        let up =[...allrecord,obj];
        setAllRecord[up];


       
          
    }


  return (
    <div>

    <Link to="/View"> View</Link>

    <div align="center">
      <form action="" onSubmit={handlbar}>
        <table>
          <tr>name</tr>
          <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
          <tr>Phone</tr>
          <input type="text" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
          <button type="submit">submit</button>
        </table>
      </form>
    </div>


    </div>
  )
}
