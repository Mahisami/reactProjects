import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ loggedIn, handleLogout }) => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="./HomePage.jsx">Home</Link>
        </li>
        <li>
          <Link to="./TrendingPage.jsx">Trending</Link>
        </li>
        <li>
          <Link to="./FeedsPage.jsx">Feeds</Link>
        </li>
        {loggedIn && (
          <>
            <li>
              <Link to="./FavoritePage.jsx">Favorites</Link>
            </li>
            <li>
              <Link to="./LibraryPage.jsx">Library</Link>
            </li>
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          </>
        )}
        {!loggedIn && (
          <>
            <li>
              <Link to="./LoginPage.jsx">Login</Link>
            </li>
            <li>
              <Link to="./RegistrationPage.jsx">Register</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
