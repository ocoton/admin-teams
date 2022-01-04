import React, { useState } from 'react';
// import { Button, Checkbox, Form } from 'semantic-ui-react'
import { Button, FormGroup } from "@blueprintjs/core";
import axios from 'axios';
// import { useHistory } from 'react-router';
import ReadUser from './ReadUser';



export default function CreateUsers() {
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
        // .then(() => {
        //     history.push( ReadUser )
        // })
        
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
                <label htmlFor="firstName">First Name</label>
                <input id="firstName" placeholder='First Name' onChange={(e) => setFirstName(e.target.value)}/>
                
                <label htmlFor="lastName">Last Name</label>
                <input id="lastName" placeholder='Last Name' onChange={(e) => setLastName(e.target.value)}/>
                
                <label htmlFor="username">Username</label>
                <input id="username" placeholder='Username' onChange={(e) => setUsername(e.target.value)}/>
                
                <label htmlFor="email">email</label>
                <input id="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
                
                <label htmlFor="phone">phone</label>
                <input id="phone" placeholder='Phone' onChange={(e) => setPhone(e.target.value)}/>

                <button onClick={postData} type='submit'>Submit</button>
            </form>
        </div>
    )
}
