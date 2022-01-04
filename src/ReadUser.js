import React, { useEffect, useState } from 'react';
import axios from 'axios';



export default function ReadUser() {
    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get(`https://61ca524e20ac1c0017ed902a.mockapi.io/api/v1/users`)
        .then((response) => {
            setAPIData(response.data);
        })
    }, [])
    const onDelete = (id) => {
        axios.delete(`https://61ca524e20ac1c0017ed902a.mockapi.io/api/v1/users/${id}`)
        .then(() => {
            getData();
        })
      }
    
    const getData = () => {
        axios.get(`https://61ca524e20ac1c0017ed902a.mockapi.io/api/v1/users`)
            .then((getData) => {
                 setAPIData(getData.data);
             })
    }
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Username</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {APIData.map((data) => {
                        return (
                        <tr>
                            <td>{data.id}</td>
                            <td>{data.username}</td>
                            <td>{data.firstName}</td>
                            <td>{data.lastName}</td>
                            <td>{data.email}</td>
                            <td>{data.phone}</td>
                            {/* <button type="submit" href=""> 
                                Delete User
                            </button> */}
                            <td><button onClick={() => onDelete(data.id)}>Delete User</button></td>
                        </tr>
                        )}
                    )}
                </tbody>
            </table>
        </div>
    )
}
