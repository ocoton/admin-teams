import * as React from "react";
import { BrowserRouter as Router,  Route, Link } from "react-router-dom";
import { Alignment, Classes, H3, H5, InputGroup, Navbar, Switch, Tab, TabId, Tabs, Button, Icon, Callout } from "@blueprintjs/core";
import { Example, handleBooleanChange, IExampleProps } from "@blueprintjs/docs-theme";
import CreateUsers from './CreateUsers';
import {UserTab} from './UserTab';
import CreateTeams from './CreateTeams';
import ReadTeams from './ReadTeams';
import Welcome from './Welcome';

// export interface ITabsExampleState {
//     activePanelOnly: boolean;
//     animate: boolean;
//     navbarTabId: TabId;
//     vertical: boolean;
// }

// export class TabsExample extends React.PureComponent<IExampleProps, ITabsExampleState> {
//     state: ITabsExampleState = {
//         activePanelOnly: false,
//         animate: true,
//         navbarTabId: "Home",
//         vertical: true,
//     };

    toggleActiveOnly = handleBooleanChange(activePanelOnly => this.setState({ activePanelOnly }));

    toggleAnimate = handleBooleanChange(animate => this.setState({ animate }));

    toggleVertical = handleBooleanChange(vertical => this.setState({ vertical }));

    render() {
        // const options = (
        //     <>
        //         <H5>Props</H5>
        //         <Switch checked={this.state.animate} label="Animate indicator" onChange={this.toggleAnimate} />
        //         <Switch checked={this.state.vertical} label="Use vertical tabs" onChange={this.toggleVertical} />
        //         <Switch
        //             checked={this.state.activePanelOnly}
        //             label="Render active tab panel only"
        //             onChange={this.toggleActiveOnly}
        //         />
        //     </>
        // );

        return (
            <Example className="docs-tabs-example">
                {/* <Navbar>
                    <Navbar.Group>
                        <Navbar.Heading>
                            Current page: <strong>{this.state.navbarTabId}</strong>
                        </Navbar.Heading>
                    </Navbar.Group>
                    <Navbar.Group align={Alignment.RIGHT}>
                        {/* controlled mode & no panels (see h1 below): */}
                        {/* <Tabs
                            animate={this.state.animate}
                            id="navbar"
                            large={true}
                            onChange={this.handleNavbarTabChange}
                            selectedTabId={this.state.navbarTabId}
                        >
                            <Tab id="Home" title="Home" />
                            <Tab id="Files" title="Files" />
                            <Tab id="Builds" title="Builds" />
                        </Tabs> */}
                    {/* </Navbar.Group>
                </Navbar> */}
                {/* uncontrolled mode & each Tab has a panel: */}
                <Tabs
                    animate={this.state.animate}
                    id="TabsExample"
                    key={this.state.vertical ? "vertical" : "horizontal"}
                    renderActiveTabPanelOnly={this.state.activePanelOnly}
                    vertical={this.state.vertical}
                >
                    <Tab id="mb" title="Home" panel={<Welcome />} panelClassName="welcome" />
                    {/* <Router>
                        <Link to="/list-users"> */}
                            <Tab id="rx" panel={<UserTab />} > <Icon icon="person" /> Users</Tab>
                        {/* </Link>
                        <Link to="/list-teams"> */}
                            <Tab id="ng"  panel={<ReadTeams />} > <Icon icon="people" /> Teams</Tab>
                        {/* </Link>
                    </Router> */}
                    {/* <Tab id="bb" disabled={true} title="Backbone" panel={<BackbonePanel />} /> */}
                    <Tabs.Expander />
                    {/* <InputGroup className={Classes.FILL} type="text" placeholder="Search..." /> */}
                </Tabs>
            </Example>
        );
    }

    handleNavbarTabChange = (navbarTabId: TabId) => this.setState({ navbarTabId });
}
