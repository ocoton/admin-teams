import React, { useState } from 'react';
import { CreateUsers } from './CreateUsers';
import { Button, Card, Colors, Dialog, Icon, H4 } from "@blueprintjs/core";

export function UserTab({userList, deleteUser, deleteAllUsers, refreshUsers}) {
    
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <div>
            <div class="section-top">
                <h2>Users</h2>
                <div class="section-top-buttons">
                    <Button icon="new-person" onClick={() => setModalVisible(true)}> Add User </Button>
                    <Button icon="trash" intent="danger " onClick={() => deleteAllUsers()}> Delete All </Button>
                </div>
            </div>

            {userList.map((data) => {
                return (
                    <>
                    <div class="list-card">
                        <div class="card">
                            <Card>
                                <H4 style={{ color: Colors.BLUE1}}>{data.username}</H4>
                                <p><Icon icon="user" style={{ color: Colors.BLUE1}}/>  {data.lastName}, {data.firstName}</p>
                                <p></p>
                                <p><Icon icon="envelope" style={{ color: Colors.BLUE1}}/>  {data.email}</p>
                                <p><Icon icon="phone" style={{ color: Colors.BLUE1}}/> {data.phone}</p>
                            </Card>
                        </div>
                        <div class="button-align">
                            <Button icon="trash" intent="danger" onClick={() => deleteUser(data.id)} />
                        </div>
                    </div>
                    </>
                )}
            )}

            <Dialog isOpen={modalVisible} onClose={() => setModalVisible(false)}>
                <CreateUsers refreshUsers={refreshUsers} />
            </Dialog>
        </div>
    )
}
