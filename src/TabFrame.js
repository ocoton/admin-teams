import * as React from "react";
import { BrowserRouter as Router,  Route, Link } from "react-router-dom";
import { Alignment, Classes, H3, H5, InputGroup, Navbar, Switch, Tab, TabId, Tabs, Button, Icon, Callout } from "@blueprintjs/core";
import { Example, handleBooleanChange, IExampleProps } from "@blueprintjs/docs-theme";
import CreateUsers from './CreateUsers';
import {UserTab} from './UserTab';
import CreateTeams from './CreateTeams';
import ReadTeams from './ReadTeams';
import Welcome from './Welcome';


export class TabFrame extends React.PureComponent {
    state = {
        activePanelOnly: false,
        animate: true,
        navbarTabId: "Home",
        vertical: true,
    };

    toggleActiveOnly = handleBooleanChange(activePanelOnly => this.setState({ activePanelOnly }));

    toggleAnimate = handleBooleanChange(animate => this.setState({ animate }));

    toggleVertical = handleBooleanChange(vertical => this.setState({ vertical }));

    render() {
        return (
            <Example className="docs-tabs-example">
                {/* uncontrolled mode & each Tab has a panel: */}
                <Tabs
                    animate={this.state.animate}
                    id="TabsExample"
                    key={this.state.vertical ? "vertical" : "horizontal"}
                    renderActiveTabPanelOnly={this.state.activePanelOnly}
                    vertical={this.state.vertical}
                >
                    <Tab id="mb" title="Home" panel={<Welcome />} panelClassName="welcome" />
                    
                    <Tab id="rx" panel={<UserTab />} > <Icon icon="person" /> Users</Tab>
                    
                    <Tab id="ng"  panel={<ReadTeams />} > <Icon icon="people" /> Teams</Tab>
                    
                    {/* <Tabs.Expander /> */}
                    
                </Tabs>
            </Example>
        );
    }

    handleNavbarTabChange = (navbarTabId: TabId) => this.setState({ navbarTabId });
}
