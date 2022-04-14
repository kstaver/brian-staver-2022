import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/About">About</Link>
        </li>
        <li>
            <Link to="/Contact">Contact</Link>
        </li>
        <li>
            <Link to="/Donate">Donate</Link>
        </li>
        <li>
            <Link to="/Endorsements">Endorsements</Link>
        </li>
        <li>
            <Link to="/Events">Events</Link>
        </li>
        <li>
            <Link to="/Petition">Petition</Link>
        </li>
        <li>
            <Link to="/Platform">Platform</Link>
        </li>
        <li>
            <Link to="/Volunteer">Volunteer</Link>
        </li>
    </ul>
  );
}

export default NavBar;