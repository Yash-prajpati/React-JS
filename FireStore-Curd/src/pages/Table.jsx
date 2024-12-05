import { collection, deleteDoc, doc, getDocs, getFirestore } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { app } from '../firebase';
import 'bootstrap/dist/css/bootstrap.min.css';

const Table = () => {
    const navigate = useNavigate();
    const db = getFirestore(app);

    const [record, setRecord] = useState([]);

    const getUser = async () => {
        try {
            const data = collection(db, "users");
            const users = await getDocs(data);
            const record = users.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setRecord(record);
        } catch (err) {
            console.log(err);
            return false;
        }
    };

    useEffect(() => {
        getUser();
    }, []);

    const deleteUser = async (id) => {
        try {
            const deletedata = doc(db, `users/${id}`);
            await deleteDoc(deletedata);
            alert("Record deleted successfully.");
            getUser();
        } catch (err) {
            console.log(err);
            return false;
        }
    };

    return (
        <div className="container my-5">
            <h2 className="text-center mb-4">User Records</h2>
            <div className="table-responsive">
                <table className="table table-striped table-bordered">
                    <thead className="table-dark">
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {record.length > 0 ? (
                            record.map((val) => {
                                const { id, name, phone } = val;
                                return (
                                    <tr key={id}>
                                        <td>{id}</td>
                                        <td>{name}</td>
                                        <td>{phone}</td>
                                        <td>
                                            <button
                                                className="btn btn-danger btn-sm me-2"
                                                onClick={() => deleteUser(id)}
                                            >
                                                Delete
                                            </button>
                                            <button
                                                className="btn btn-primary btn-sm"
                                                onClick={() => navigate('/edit', { state: val })}
                                            >
                                                Edit
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })
                        ) : (
                            <tr>
                                <td colSpan="4" className="text-center">
                                    No records found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            <div className="text-center mt-3">
                <Link to="/add" className="btn btn-success">
                    Add New User
                </Link>
            </div>
        </div>
    );
};

export default Table;
