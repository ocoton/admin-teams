import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import { Button, Card, Colors } from "@blueprintjs/core";
import CreateTeams from './CreateTeams';




export default function ReadTeams() {
    const [APITeamsList, setAPITeamsList] = useState([]);
    const [userList, setUserList] = useState([]);


    useEffect(() => {
        axios.get(`https://61ca524e20ac1c0017ed902a.mockapi.io/api/v1/teams`)
        .then((response) => {
            setAPITeamsList(response.data);
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
                setAPITeamsList(getData.data);
            })
    }
    const retreiveUser = (member) => {
        // member.map(id) => (
            axios.get(`https://61ca524e20ac1c0017ed902a.mockapi.io/api/v1/users/${member}`)
            .then((retreiveUser) => {
                setUserList(retreiveUser.data);
            })
        // )
        // .then(() => {
        //     getData();
        // })
    }
    const deleteAllTeams = () => {
        const allTeams = APITeamsList.map((team) => { 
            console.log(team.id);
            axios.delete(`https://61ca524e20ac1c0017ed902a.mockapi.io/api/v1/teams/${team.id}`)
        })
        .then((getData) => {
            setAPITeamsList(getData.data);
        })
    }
    return (
        <div>
            <div class="section-top">
                <h2> Teams </h2>
                <div class="section-top-buttons">
                        <Button icon="people"> 
                        Add Team 
                            {/* <Router>
                            <Link>
                            <createTeam />
                            </Link>
                            </Router> */}
                        </Button>
                    {/* <Button icon="trash" intent="danger"> Delete All </Button> */}
                    <Button icon="trash" intent="danger " onClick={() => deleteAllTeams()}> Delete All </Button>

                </div>
            </div>
            <table>
                {/* <thead>
                    <tr>
                        <th>#</th>
                        <th>Team Name</th>
                        <th>Description</th>
                        <th>Members</th>
                        <th>aka</th>
                    </tr>
                </thead> */}
                <tbody>
                    {APITeamsList.map((data) => {
                        return (
                        // <tr>
                        //     <td>{data.id}</td>
                        //     <td>{data.name}</td>
                        //     <td>{data.description}</td>
                        //     {/* {const memberArray = data.members}
                        //     {retreiveUser(memberArray)} */}

                        //     <td>{data.members}</td>
                        //     {/* {console.log(data.members[0])}
                        //      */}
                        //     {/* <td>{retreiveUser(data.members[0])}</td> */}
                        //     {/* <button type="submit" href=""> 
                        //         Delete User
                        //     </button> */}
                        //     <td>
                        //         {/* <Button onClick={() => onDelete(data.id)}>Delete</Button> */}
                        //         <Button icon="trash" intent="danger" onClick={() => onDelete(data.id)} />
                        //     </td>
                        // </tr>
                        <>
                         <div class="list-card">
                                <div class="card">
                            <Card>
                                {/* <tr> */}
                                    {/* <td>{data.id}</td> */}
                                    <p style={{ color: Colors.BLUE1,}}>{data.name}</p>
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
            <CreateTeams />
        </div>
    )
}
