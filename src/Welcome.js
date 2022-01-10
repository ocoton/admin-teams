import React from 'react';
import { Card, Icon, H3 } from "@blueprintjs/core";

export function Welcome () {
    return (
        <div>
            <Card>
                <div class="welcome-card" >
                        <H3><Icon icon="helper-management" /> Welcome to the Admin Console</H3>
                        <p>In this console, you will be able to:</p>
                        <ul>
                            <li>Create and manage users</li>
                            <li>Create and manage teams</li>
                            <li>Handle team permissions <strong>coming soon</strong></li>
                        </ul>
                </div>
            </Card>
        </div>
    )
}