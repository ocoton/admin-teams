import React, { useState } from 'react';
import { CreateUsers } from './CreateUsers';
import { Button, Card, Colors, Overlay } from "@blueprintjs/core";

export function UserTab({ userList, deleteUser, deleteAllUsers, refreshUsers }) {

    // const [userListVisible, setUserListVisible] = useState(true);

    console.log('user tab', userList)
    return (
        <div>
            <div class="section-top">
                <h2>Users</h2>
                <div class="section-top-buttons">
                    {/* <Link to="/create-user"> */}
                    {/* <Button icon="new-person" onClick={() => setUserListVisible(false)}> Add User </Button> */}
                    <Button icon="new-person"> Add User </Button>

                    {/* </Link> */}
                    <Button icon="trash" intent="danger " onClick={() => deleteAllUsers()}> Delete All </Button>
                </div>
            </div>
            {/* {userListVisible ? <UserList userList={userList} deleteUser={deleteUser} /> :  <CreateUsers refreshUsers={refreshUsers} userListVisible={userListVisible}/>}             */}
            <UserList deleteUser={deleteUser} /> 
            <CreateUsers refreshUsers={refreshUsers}/>            

        </div>
    )
}


function UserList({userList, deleteUser }) {
    return 
    <table>
        <tbody>
            {userList.map((data) => {
                return (
                    <>
                        <div class="list-card">
                            <div class="card">
                                <Card>
                                    {/* <tr> */}
                                    {/* <td>{data.id}</td> */}
                                    <p style={{ color: Colors.BLUE1 }}>{data.username}</p>
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
                                <Button icon="trash" intent="danger" onClick={() => deleteUser(data.id)} />
                            </div>
                        </div>
                    </>
                )
            }
            )}
        </tbody>
    </table>
}