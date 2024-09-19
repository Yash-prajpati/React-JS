import React, { Component } from 'react';

const TableRow = ({ data }) => {
    const { grid, name, email, password, course, city } = data;
    return (
        <tr>
            <td>{grid}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{password}</td>
            <td>{course}</td>
            <td>{city}</td>
        </tr>
    );
};

class Data extends Component {
    render() {
        const { yash } = this.props;

        return (
            <div style={{ margin: 'auto', width: '80%' }}>
                <h1>STUDENT DATA</h1>
                <table style={{ width: '100%', borderCollapse: 'collapse',}} border={3} cellPadding={55}  >
                    <thead>
                        <tr>
                            <th>GRID</th>
                            <th>NAME</th>
                            <th>EMAIL</th>
                            <th>PASSWORD</th>
                            <th>COURSE</th>
                            <th>CITY</th>
                        </tr>
                    </thead>
                    <tbody>
                        {yash.map((data, index) => (
                            <TableRow key={data.grid || index} data={data} />
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Data;
