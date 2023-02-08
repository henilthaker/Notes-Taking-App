import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import SideBar from './sidebar.js'
import NavBar from './navbar.js'
import Home from './home.js'
import Create from "./create.js";
import NoteDetails from "./notedetails";
function App() {
  return (
    <Router>
      <div className="App">
        <SideBar />
        <div className="Content">
          {/* <NavBar /> */}
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/notes/:id'>
              {/* <Home /> */}
              <NoteDetails />
            </Route>
            <Route exact path='/create/:color'>
              <Create />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
