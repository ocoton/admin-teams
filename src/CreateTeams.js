import React, { useEffect, useState } from 'react';
// import { Button, Checkbox, Form } from 'semantic-ui-react'
import { Button, FormGroup } from "@blueprintjs/core";
import axios from 'axios';
// import { useHistory } from 'react-router';
import ReadUser from './ReadUser';



export default function CreateTeams() {
    // let history = useHistory();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [members, setMembers] = useState([]);
    
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
        console.log(this.members);
        // const isChecked = e.target.checked;
        // if(isChecked){
        //     this.setMembers({ members: [...this.members, e.target.value] });
        // }
        // console.log();
        // console.log(user);
    }

    const onSelect = (id) => {
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

    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get(`https://61ca524e20ac1c0017ed902a.mockapi.io/api/v1/users`)
        .then((response) => {
            setAPIData(response.data);
        })
    }, [])

    const postData = () => {       
        axios.post(`https://61ca524e20ac1c0017ed902a.mockapi.io/api/v1/teams`, {
            name,
            description,
            members
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
            
            <form
            onSubmit={e => {
                e.preventDefault();
            }}
            >
                <label htmlFor="name">Team Name</label>
                <input id="name" placeholder='Name' onChange={(e) => setName(e.target.value)}/>
                
                <label htmlFor="description">Description</label>
                <input id="description" placeholder='Description' onChange={(e) => setDescription(e.target.value)}/>
                
                <label htmlFor="members">Select Members</label>
                {APIData.map((user) => {
                    return (
                        <tr>
                            <input type="checkbox" id={user.id} dataset={user} placeholder={user.username} onChange={(e) => setMembers({user})}/>
                            {console.log(user)}
                            <td>{user.username}</td>
                            {/* <button type="submit" href=""> 
                                Delete User
                            </button> */}
                            {/* <td><button onClick={() => onSelect(user.id)}>Add</button></td> */}
                        </tr>
                    )
                })}

                <button onClick={postData} type='submit'>Submit</button>
            </form>
        </div>
    )
}

// export default CreateTeams;