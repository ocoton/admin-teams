import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CreateUsers from './CreateUsers';
import axios from 'axios';
import { Button, Card, Colors } from "@blueprintjs/core";



export default function ReadUser() {
    const [APIUserList, setAPIUserList] = useState([]);
   
    useEffect(() => {
        axios.get(`https://61ca524e20ac1c0017ed902a.mockapi.io/api/v1/users`)
        .then((response) => {
            setAPIUserList(response.data);
        })
    }, []) 
    const onDelete = (id) => {
        axios.delete(`https://61ca524e20ac1c0017ed902a.mockapi.io/api/v1/users/${id}`)
        .then(() => {
            getUsers();
        })
      }
    
    const getUsers = () => {
        axios.get(`https://61ca524e20ac1c0017ed902a.mockapi.io/api/v1/users`)
            .then((getUsers) => {
                 setAPIUserList(getUsers.data);
             })
    }
    const deleteAllUsers = () => {
        const allUsers = APIUserList.map((user) => { 
            console.log(user.id);
            axios.delete(`https://61ca524e20ac1c0017ed902a.mockapi.io/api/v1/users/${user.id}`)
        })
        .then((getUsers) => {
            setAPIUserList(getUsers.data);
        })
    }
    return (
        <div>
            <div class="section-top">
                <h2>Users</h2>
                <div class="section-top-buttons">
                        {/* <Link to="/create-user"> */}
                            <Button icon="new-person"> Add User </Button>
                        {/* </Link> */}
                    <Button icon="trash" intent="danger " onClick={() => deleteAllUsers()}> Delete All </Button>
                </div>
            </div>
            <table>
                {/* <thead>
                    <tr>
                        <th>#</th>
                        <th>Username</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                    </tr>
                </thead> */}
                <tbody>
                    {APIUserList.map((data) => {
                        return (
                            <>
                            <div class="list-card">
                                <div class="card">
                                    <Card>
                                        {/* <tr> */}
                                            {/* <td>{data.id}</td> */}
                                            <p style={{ color: Colors.BLUE1}}>{data.username}</p>
                                            {/* <td>{data.firstName}</td>
                                            <td>{data.lastName}</td>
                                            <td>{data.email}</td>
                                            <td>{data.phone}</td> */}
                                            {/* <button type="submit" href=""> 
                                                Delete User
                                            </button> */}
                                        {/* </tr> */}
                                    </Card>
                                </div>
                                <div class="button-align">
                                    <Button icon="trash" intent="danger" onClick={() => onDelete(data.id)} />
                                </div>
                            </div>
                            </>
                        )}
                    )}
                </tbody>
            </table>
            <CreateUsers />
        </div>
    )
}
