import React, { useEffect, useState } from 'react';
import axios from 'axios';



export default function ReadTeams() {
    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get(`https://61ca524e20ac1c0017ed902a.mockapi.io/api/v1/teams`)
        .then((response) => {
            setAPIData(response.data);
        })
    }, [])
    const onDelete = (id) => {
        axios.delete(`https://61ca524e20ac1c0017ed902a.mockapi.io/api/v1/teams/${id}`)
        .then(() => {
            getData();
        })
      }
    
    const getData = () => {
        axios.get(`https://61ca524e20ac1c0017ed902a.mockapi.io/api/v1/teams`)
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
                        <th>Team Name</th>
                        <th>Description</th>
                        <th>Members</th>
                        <th>aka</th>
                    </tr>
                </thead>
                <tbody>
                    {APIData.map((data) => {
                        return (
                        <tr>
                            <td>{data.id}</td>
                            <td>{data.name}</td>
                            <td>{data.description}</td>
                            <td>{data.members}</td>
                            {/* <button type="submit" href=""> 
                                Delete User
                            </button> */}
                            <td><button onClick={() => onDelete(data.id)}>Delete</button></td>
                        </tr>
                        )}
                    )}
                </tbody>
            </table>
        </div>
    )
}
