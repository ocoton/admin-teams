import React, { useEffect, useState } from 'react';
import { Button, FormGroup, Label, Checkbox, InputGroup, H3 } from "@blueprintjs/core";

import axios from 'axios';
// import { useHistory } from 'react-router';
import ReadUser from './ReadUser';



export default function CreateTeams() {
    // let history = useHistory();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    // const [members, setMembers] = useState([]);
    
    // const handleMemberSelect = (e) => {
    //     let memberList = this.state.members;
    //     let check = e.target.checked;
    //     let checkedMember = e.target.value;
    //     if(check){
    //         this.setState({
    //             members: [...this.state.members, checkedMember]
    //         })
    //     }else{ 
    //         var index = memberList.indexOf(checkedMember);
    //         if (index > -1) {
    //             memberList.splice(index, 1);
    //             this.setState({
    //                 members: memberList
    //             })
    //         } 
    //     }
    // }

    // const handleInputChangeDom = (e) => {
    //     const newSet = new Set(this.state.members); // create a clone, don't update current state
    //     if (e.target.checked) {
    //        newSet.add(e.target.value);
    //     } else {
    //        newSet.delete(e.target.value);
    //     }
    //     this.setState({
    //        members: newSet
    //     });
    //  }

    const onChange = (e) =>{
        console.log(e.target.checked);
        // console.log(this.members);
        // const isChecked = e.target.checked;
        // if(isChecked){
        //     this.setMembers({ members: [...this.members, e.target.value] });
        // }
        // console.log();
        // console.log(user);
    }

    const onSelect = (id) => {
    //     axios.delete(`https://61ca524e20ac1c0017ed902a.mockapi.io/api/v1/users/${id}`)
    //     .then(() => {
    //         getData();
    //     })
    //   }
    //   const getData = () => {
    //     axios.get(`https://61ca524e20ac1c0017ed902a.mockapi.io/api/v1/users`)
    //         .then((getData) => {
    //              setAPIData(getData.data);
    //          })
    }

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
        
        // fetch('https://61ca524e20ac1c0017ed902a.mockapi.io/api/v1/users', {
        // method: 'POST',
        // headers: {
        //     'Accept': 'application/json',
        //     'Content-Type': 'application/json',
        // },
        // body: JSON.stringify({
        //     firstName: firstName,
        //     lastName: lastName,
        //     username: username,
        //     email: email
        //     })
        // })
    }

    
    return (
        <div>
            <div>
            </div>
            <H3> New Team </H3>
            <FormGroup
            onSubmit={e => {
                // console.log(users)
                //filter for selected and send reuqest
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
                                // //hello can you still see this
                                // //users, inmitalyu set  from api
                                // [
                                //     {'name' : 'bob', 'id' : 123, 'selected' : false},
                                //     {'name' : 'alan', 'id' : 2345}

                                // ]
                                // //cant do this, mutating state
                                // users[e.target.id][selected] = true

                                // setUsers(       [
                                //     {'name' : 'bob', 'id' : 123, 'selected' : true},
                                //     {'name' : 'alan', 'id' : 2345}

                                // ])

                                // copies outer array                            
                                const nextUsers = [...users]
                                //copies selected user and overrides selected propertty
                                nextUsers[e.target.id] = { ...users[e.target.id], selected: e.target.checked }         
                                console.log(`setting idx ${e.target.id} ${e.target.checked }`)                       
                                setUsers(nextUsers)


                            }
                            }/>
                        
                            <td>{user.username}</td>
                            {/* <button type="submit" href=""> 
                                Delete User
                            </button> */}
                            {/* <td><button onClick={() => onSelect(user.id)}>Add</button></td> */}
                        </tr>
                    )
                })}

                <Button onClick={createTeam} type='submit'>Submit</Button>
            </FormGroup>
        </div>
    )
}

// export default CreateTeams;