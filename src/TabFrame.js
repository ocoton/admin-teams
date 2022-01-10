import { Tab, Tabs, Icon } from "@blueprintjs/core";
import { Example } from "@blueprintjs/docs-theme";
import { UserTab } from './UserTab';
import { TeamTab }from './TeamTab';
import { Welcome } from './Welcome';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export function TabFrame() {
    
    const [teams, setTeams] = useState([]);
    const [users, setUsers] = useState([]);
    
    // Teams API functions
    useEffect(() => {
        axios.get(`https://61ca524e20ac1c0017ed902a.mockapi.io/api/v1/teams`)
        .then((response) => {
            setTeams(response.data);
        })
    }, [])

    const deleteTeam = (id) => {
        axios.delete(`https://61ca524e20ac1c0017ed902a.mockapi.io/api/v1/teams/${id}`)
        .then(() => {
            refreshTeams();
        })
    }

    const refreshTeams = () => {
        
        const getPromise = axios.get(`https://61ca524e20ac1c0017ed902a.mockapi.io/api/v1/teams`)
        getPromise.then(response => setTeams(response.data))
            
    }

    const deleteAllTeams = () => {
        const deletePromises = teams.map((team) => { 
            axios.delete(`https://61ca524e20ac1c0017ed902a.mockapi.io/api/v1/teams/${team.id}`)
        })
        Promise.all(deletePromises)
        .then(() => {
            refreshTeams()
        })
    }
    
    // Users API functions
    useEffect(() => {
        axios.get(`https://61ca524e20ac1c0017ed902a.mockapi.io/api/v1/users`)
        .then((response) => {
                setUsers(response.data);
            })
    }, [])

    const deleteUser = (id) => {
        axios.delete(`https://61ca524e20ac1c0017ed902a.mockapi.io/api/v1/users/${id}`)
            .then(() => {
                refreshUsers();
            })
    }
    
    const refreshUsers = () => {
        
        const getPromise = axios.get(`https://61ca524e20ac1c0017ed902a.mockapi.io/api/v1/users`)
        getPromise.then(response => setUsers(response.data))
            
    }

    const deleteAllUsers = () => {
        const deletePromises = users.map((user) =>             
            axios.delete(`https://61ca524e20ac1c0017ed902a.mockapi.io/api/v1/users/${user.id}`)
        )        
        Promise.all(deletePromises)        
        .then(() => {
            refreshUsers()                
        })
    }
    
    const [tabState, setTabState] = useState({
        activePanelOnly: false,
        animate: true,
        navbarTabId: "Home",
        vertical: true,
    });

    return (
        <Example className="docs-tabs-example">
            <Tabs
                animate={tabState.animate}
                id="TabsExample"
                key={tabState.vertical ? "vertical" : "horizontal"}
                renderActiveTabPanelOnly={tabState.activePanelOnly}
                vertical={tabState.vertical}
            >
                <Tab id="mb" title="Home" panel={<Welcome />} panelClassName="welcome" />
                <Tab id="rx" panel={<UserTab userList={users} deleteUser={deleteUser} deleteAllUsers={deleteAllUsers} refreshUsers={refreshUsers}  />} > <Icon icon="person" /> Users</Tab>
                <Tab id="ng" panel={<TeamTab userList={users} teamList={teams} deleteTeam={deleteTeam} deleteAllTeams={deleteAllTeams} refreshTeams={refreshTeams}/>} > <Icon icon="people" /> Teams</Tab>
                <Tabs.Expander />
            </Tabs>
        </Example>
    );

}
