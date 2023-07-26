import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import UserSignUp from './UserSignUp';
import AdminSignUp from './AdminSignUp';
import '../StyleSheets/MainSignUp.css'; // Import custom CSS file for styling

function MainSignUp() {
  return (
    <Router>
      <div className="main-container">
        <nav className="custom-navbar">
          <ul>
            <li>
              <Link to="/user">UserSignUp</Link>
            </li>
            <li>
              <Link to="/admin">AdminSignUp</Link>
            </li>
          </ul>
        </nav>

        <div className="page-container">
          <Switch>
            <Route exact path='Sign-Up/'></Route>
            <Route path="/user">
              <UserSignUp></UserSignUp>
            </Route>
            <Route path="/admin">
                <AdminSignUp></AdminSignUp>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default MainSignUp;
