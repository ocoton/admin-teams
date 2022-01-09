import React from 'react';
import { Button, Card, Colors, Icon, Callout, H3 } from "@blueprintjs/core";


// const Welcome: React.FunctionComponent = () => (
export default function Welcome () {
    return (
        <div>
            <Card>
                <div class="welcome-card" >
                        <H3><Icon icon="helper-management" /> Welcome to the Admin Console</H3>
                        <p>In this console, you will be able to:</p>
                        <ul>
                            <li>Create and manage users</li>
                            <li>Create and manage teams</li>
                            <li>Handle team permissions<Callout>coming soon</Callout></li>
                        </ul>
                </div>
            </Card>
        </div>
    )
}