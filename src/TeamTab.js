import React, { useState } from 'react';
import { Button, Card, Colors, Dialog, H3, H4, Icon } from "@blueprintjs/core";
import { CreateTeams } from './CreateTeams';

export function TeamTab({teamList, deleteTeam, deleteAllTeams, refreshTeams }) {

    const [modalVisible, setModalVisible] = useState(false);

    return (
        <div>
            <div class="section-top">
                <h2> Teams </h2>
                <div class="section-top-buttons">
                        <Button icon="people" onClick={() => setModalVisible(true)}> 
                        Add Team 
                        </Button>
                    <Button icon="trash" intent="danger " onClick={() => deleteAllTeams()}> Delete All </Button>

                </div>
            </div>
            <table>
                <tbody>
                    {teamList.map((data) => {
                        return (
                        <>
                         <div class="list-card">
                                <div class="card">
                            <Card>
                                <div class="underlined">
                                    <H3 style={{ color: Colors.BLUE1,}}>{data.name}</H3>
                                    <p> {data.description}</p>
                                </div>
                                    <H4 style={{ color: Colors.BLUE1,}}>Members</H4>
                                    {data.members.map((member) => {
                                        return (
                                            <p>User Id: {member}</p>
                                        )
                                    }
                                    )}
                            </Card>
                            </div>
                                <div class="button-align">
                            <Button icon="trash" intent="danger" onClick={() => deleteTeam(data.id)} />
                            </div>
                            </div>
                            </>
                        )}
                    )}
                </tbody>
            </table>
            <Dialog isOpen={modalVisible} onClose={() => setModalVisible(false)}>
                <CreateTeams refreshTeams={refreshTeams}/>
            </Dialog>
        </div>
    )
}
