// App.js
import React, { useState } from "react";
import LoginPage from "./component/LoginPage";
import RegistrationPage from "./component/RegistrationPage";
import Navbar from "./component/Navbar";
import PlayerPage from "./component/PlayerPage";
import TrendingPage from "./component/TrendingPage";
import FeedsPage from "./component/FeedsPage";
import FavoritePage from "./component/FavoritePage";
import LibraryPage from "./component/LibraryPage";
import HomePage from "./component/HomePage";

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './styles/style.css';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const handleLogin = (username, password) => {
    
    if (username === "admin" && password === "password") {
      setLoggedIn(true);
      setUser({ username });
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUser(null);
  };

  const handleRegistration = (username, password) => {
    console.log("New user registered:", username, password);
  };

  return (
    <Router>
      
      <div>
        <Navbar loggedIn={loggedIn} handleLogout={handleLogout} />
        <Switch>
          
          <Route
            path="./component/LoginPage.jsx"
            render={(props) => (
              <LoginPage {...props} handleLogin={handleLogin} />
            )}
          />
          <Route
            path="./component/RegistrationPage.jsx"
            render={(props) => (
              <RegistrationPage {...props} handleRegistration={handleRegistration} />
            )}
          />
          {loggedIn && (
            <>
              <Route path="./component/Navbar.jsx" component={Navbar}/>
              <Route path="./component/HomePage.jsx" component={HomePage}/>
              <Route path="./component/PlayerPage.jsx" component={PlayerPage} />
              <Route path="./component/TrendingPage.jsx" component={TrendingPage} />
              <Route path="./component/FeedsPage.jsx" component={FeedsPage} />
              <Route path="./component/FavoritePage.jsx" component={FavoritePage} />
              <Route
                path="./component/LibraryPage.jsx"
                render={(props) => (
                  <LibraryPage {...props} user={user} />
                )}
              />
            </>
          )}
        </Switch>
      </div>
    </Router>
  );
};

export default App;
