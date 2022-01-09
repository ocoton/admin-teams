import * as React from "react";
import { Alignment, Classes, H3, H5, InputGroup, Navbar, Switch, Tab, TabId, Tabs } from "@blueprintjs/core";
import CreateUsers from './CreateUsers';
import ReadUser from './ReadUser';
import CreateTeams from './CreateTeams';
import ReadTeams from './ReadTeams';

export default function TabFrame () {
    return (
    <Tabs id="TabFrame" onChange={this.handleTabChange} selectedTabId="rx">
        {/* <Tab id="ng" title="CreateUser" panel={<CreateUsers />} />
        <Tab id="mb" title="Ember" panel={<CreateTeams />} panelClassName="ember-panel" /> */}
        <Tab id="rx" title="React" panel={<ReadUser />} />
        <Tab id="mb" title="React" panel={<ReadTeams />} />

        {/* <Tab id="bb" disabled title="Backbone" panel={<BackbonePanel />} /> */}
        <Tabs.Expander />
        <input className="bp3-input" type="text" placeholder="Search..." />
    </Tabs>
        // <div class="bp3-tabs">
        //     <ul class="bp3-tab-list .modifier" role="tablist">
        //         <li class="bp3-tab" role="tab" aria-selected="true">Users</li>
        //         <li class="bp3-tab" role="tab">Teams </li>
        //         {/* <li class="bp3-tab" role="tab" aria-disabled="true">Disabled tab</li> */}
        //     </ul>
        //     <div class="bp3-tab-panel" role="tabpanel"> <ReadUser /></div>
        //     <div class="bp3-tab-panel" role="tabpanel" aria-hidden="true"><ReadTeams /></div>
        //     {/* <div class="bp3-tab-panel" role="tabpanel" aria-hidden="true">Disabled panel</div> */}
        // </div>
    )
}
