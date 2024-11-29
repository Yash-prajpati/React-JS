import { addDoc, collection, getFirestore } from 'firebase/firestore'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { app } from '../firebase'

const Form = () => {
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")

    const db = getFirestore(app)

    const handlesubmit = async (e) => {
        e.preventDefault();
        try {
            const user = await addDoc(collection(db, "users"), {
                name: name,
                phone: phone,
            })
            alert("record add");
            navigate('/')
        } catch (err) {
            console.log(err);
            return false;
        }

    }

    return (
        <div align="center">
            <h2>Add User</h2>
            <form onSubmit={handlesubmit}>
                <table border={1}>
                    <tr>
                        <td>Name :- </td>
                        <td><input type="text" onChange={(e) => setName(e.target.value)} value={name} /></td>
                    </tr>
                    <tr>
                        <td>phone :- </td>
                        <td><input type="text" onChange={(e) => setPhone(e.target.value)} value={phone} /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><input type="submit" /></td>
                    </tr>
                </table>
            </form>
            <Link to={`/`}>View</Link>
        </div>
    )
}

export default Form