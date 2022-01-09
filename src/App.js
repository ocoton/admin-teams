import logo from './logo.svg';
import './App.css';
import User from "./User";
// import TabFrame from "./TabFrame";
import CreateUsers from './CreateUsers';
import ReadUser from './ReadUser';
import CreateTeams from './CreateTeams';
import ReadTeams from './ReadTeams';
import { Button, Colors } from "@blueprintjs/core";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { TabsExample, ITabsExampleState } from './TabsExample';



function App() {
  return( 
    // <Router>   
      <div>
        <div className="">
          <h3 style={{ color: Colors.BLUE1}}>Admin </h3>
          {/* <Routes>
            <Route exact path='/createuser' component={CreateUsers} />
            <Route exact path='/readuser' component={ReadUser} />
          </Routes> */}
          {/* <h2>Users</h2>
          <h2>Teams</h2> */}
          {/* <h2> <Link to="/createuser" component={CreateUsers}>Create User</Link> </h2> */}

          {/* <User /> */}
        </div>
        {/* <TabFrame /> */}
<div> 
{/* <h1> </h1> */}
</div>

        {/* <button type="submit" href=""> 
          Create New
        </button>
        <button type="submit" href=""> 
          Delete All
        </button> */}
        {/* <CreateUsers />
        <ReadUser />
        <CreateTeams />
        <ReadTeams /> */}
        {/* <Button intent="success" text="button content" /> */}
        <TabsExample />

      </div>
    // </Router>
  );
}

export default App;
