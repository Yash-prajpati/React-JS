import { getDatabase, onValue, ref } from 'firebase/database';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { app } from '../../firebase';

const View = () => {
    const [record, setRecord] = useState("");

    const db = getDatabase(app);

    const viewData = () => {
        const users = ref(db, "users");

        onValue(users, (u) => {
            const data = u.val();
            setRecord(data);
        });
    };

    useEffect(() => {
        viewData();
    }, []);

    return (
        <div className="container my-5">
            <div className="card shadow-lg p-4">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h2 className="text-primary">View Users</h2>
                    <Link to="/add" className="btn btn-success">
                        + Add New User
                    </Link>
                </div>
                <div className="table-responsive">
                    <table className="table table-bordered table-hover">
                        <thead className="table-primary sticky-top">
                            <tr>
                                <th>Sr. No</th>
                                <th>Name</th>
                                <th>Phone</th>
                            </tr>
                        </thead>
                        <tbody>
                            {record && Object.entries(record).length > 0 ? (
                                Object.entries(record).map(([key, val], index) => (
                                    <tr key={key}>
                                        <td>{index + 1}</td>
                                        <td>{val.name}</td>
                                        <td>{val.phone}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="3" className="text-center">
                                        No records found
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default View;
