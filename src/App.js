import logo from './logo.svg';
import './App.css';
import User from "./User";
import CreateUsers from './CreateUsers';
import ReadUser from './ReadUser';
import CreateTeams from './CreateTeams';
import ReadTeams from './ReadTeams';
import { Button } from "@blueprintjs/core";
import { BrowserRouter as Router, Route } from 'react-router-dom';



function App() {
  return( 
    // <Router>   
      <div>
        <div className="App">
          <h1> User CRUD operations </h1>
          {/* <User /> */}
        </div>
        <button type="submit" href=""> 
          Create New
        </button>
        <button type="submit" href=""> 
          Delete All
        </button>
        <CreateUsers />
        <ReadUser />
        <CreateTeams />
        <ReadTeams />
        <Button intent="success" text="button content" />

        {/* <Routes> */}
          {/* <Route exact path='/createuser' component={CreateUsers} /> */}
          {/* <Route exact path='/readuser' component={ReadUser} /> */}
        {/* </Routes> */}
      </div>
    // </Router>
  );
}

export default App;
