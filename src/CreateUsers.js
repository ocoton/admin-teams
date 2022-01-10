import React, { useState } from 'react';
import { Button, FormGroup, Label, InputGroup, H3 } from "@blueprintjs/core";
import axios from 'axios';
// import { useHistory } from 'react-router';




// export function CreateUsers({ refreshUsers, setUserListVisible }) {
export function CreateUsers({ refreshUsers }) {

    // let history = useHistory();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const postData = () => {
        axios.post(`https://61ca524e20ac1c0017ed902a.mockapi.io/api/v1/users`, {
            firstName,
            lastName,
            username,
            email,
            phone
        })
            .then(() => {
                console.log('refreshing')
                refreshUsers()
            });
    }

    return (
        <div class="bp3-dialog-body">
            <H3> New User </H3>
            <FormGroup
                onSubmit={e => {
                    e.preventDefault();
                }}
            >
                <Label htmlFor="firstName">First Name</Label>
                <input class="bp3-input .modifier" id="firstName" placeholder='First Name' onChange={(e) => setFirstName(e.target.value)} />

                <Label htmlFor="lastName">Last Name</Label>
                <input class="bp3-input .modifier" id="lastName" placeholder='Last Name' onChange={(e) => setLastName(e.target.value)} />

                <Label htmlFor="username">Username</Label>
                <input class="bp3-input .modifier" id="username" placeholder='Username' onChange={(e) => setUsername(e.target.value)} />

                <Label htmlFor="email">Email Address</Label>
                <input class="bp3-input .modifier" id="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} />

                <Label htmlFor="phone">Phone Number</Label>
                <input class="bp3-input .modifier" id="phone" placeholder='Phone' onChange={(e) => setPhone(e.target.value)} />

                <Button onClick={postData} type='submit'>Submit</Button>
            </FormGroup>
        </div>
    )
}
