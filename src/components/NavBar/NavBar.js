import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

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


export default NavBar;
import React, { useState } from 'react';
import "./header.css";
import Mobile from './mobile/index';
import Web from './web/index';

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="header">
            <div className="logo">Kendra's Portfolio</div>
            <div className="menu">
                <div className="web-menu">
                    <Web />
                </div>
                <div className="mobile-menu">
                    <div onClick={() => setIsOpen(!isOpen)}>
                    <img src={process.env.PUBLIC_URL + '/images/menu-32.png'} alt="icon" />
                    </div>
                    {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen} />}
                </div>
            </div>
        </div>
    )
}

export default NavBar;
