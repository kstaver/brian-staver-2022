import React from 'react';
import {Link} from 'react-router-dom';
import Home from '../Body/Home/Home';
import About from '../Body/About/About';
import Contact from '../Body/Contact/Contact';
import Endorsements from '../Body/Endorsements/Endorsements';
import Petition from '../Body/Petition/Petition';
import Platform from '../Body/Platform/Platform';
import Volunteer from '../Body/Volunteer/Volunteer';
import Events from '../Body/Events/Events';
import Donate from '../Body/Donate/Donate';

export const MenuItems = [
    {
        title:'Home',
        url: <Link to={<Home/>}></Link>,
        cName: 'nav-links',
    },
    {
        title:'About',
        url:  <Link to={<About/>}></Link>,
        cName: 'nav-links',
    },
    {
        title:'Contact',
        url:  <Link to={<Contact/>}></Link>,
        cName: 'nav-links',
    },
    {
        title:'Endorsements',
        url:  <Link to={<Endorsements/>}></Link>,
        cName: 'nav-links',
    },
    {
        title:'Events',
        url:  <Link to={<Events/>}></Link>,
        cName: 'nav-links',
    },
    {
        title:'Petition',
        url:  <Link to={<Petition/>}></Link>,
        cName: 'nav-links',
    },
    {
        title:'Platform',
        url:  <Link to={<Platform/>}></Link>,
        cName: 'nav-links',
    },
    {
        title:'Volunteer',
        url:  <Link to={<Volunteer/>}></Link>,
        cName: 'nav-links',
    },
    {
        title:'Donate',
        url:  <Link to={<Donate/>}></Link>,
        cName: 'nav-links-mobile',
    },
]