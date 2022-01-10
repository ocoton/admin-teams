import React, { useEffect, useState } from 'react';
import { Button, FormGroup, Label, Checkbox, H3 } from "@blueprintjs/core";
import axios from 'axios';

export function CreateTeams({ refreshTeams }) {
    
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    
    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios.get(`https://61ca524e20ac1c0017ed902a.mockapi.io/api/v1/users`)
        .then((response) => {
            setUsers(response.data);
        })
    }, [])

    const createTeam = () => {       
        const selectedUsers = users.filter(user => user.selected).map( user => user.id)
        axios.post(`https://61ca524e20ac1c0017ed902a.mockapi.io/api/v1/teams`, {
            name: name,
            description: description,
            members: selectedUsers
        })
        .then(() => {
            refreshTeams()
        });
    }

    return (
        <div class="bp3-dialog-body">
            <H3> New Team </H3>
            <FormGroup
            onSubmit={e => {
                e.preventDefault();
            }}
            >
                <Label htmlFor="name">Team Name</Label>
                <input class="bp3-input .modifier" id="name" placeholder='Name' onChange={(e) => setName(e.target.value)}/>
                
                <Label htmlFor="description">Description</Label>
                <input class="bp3-input .modifier" id="description" placeholder='Description' onChange={(e) => setDescription(e.target.value)}/>
                
                <Label htmlFor="members">Select Members</Label>
                {users.map((user, index) => {
                    return (
                        <tr>
                            <Checkbox checked={user.selected} type="checkbox" id={index} onChange={(e) => {                           
                                const nextUsers = [...users]
                                nextUsers[e.target.id] = { ...users[e.target.id], selected: e.target.checked }         
                                setUsers(nextUsers)
                            }
                            }/>            
                            <td>{user.username} (id:{user.id})</td>
                        </tr>
                    )
                })}
                <Button onClick={createTeam} type='submit'>Submit</Button>
            </FormGroup>
        </div>
    )
}