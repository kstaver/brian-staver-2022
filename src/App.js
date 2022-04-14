import './App.css';
import React from 'react';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Endorsements from './components/Endorsements/Endorsements';
import Petition from './components/Petition/Petition';
import Platform from './components/Platform/Platform';
import Volunteer from './components/Volunteer/Volunteer';
import Events from './components/Events/Events';
import Donate from './components/Donate/Donate';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Endorsements" element={<Endorsements/>}/>
        <Route path="/Petition" element={<Petition/>} />
        <Route path="/Platform" element={<Platform/>}/>
        <Route path="/Volunteer" element={<Volunteer/>}/>
        <Route path="/Events" element={<Events/>}/>
        <Route path="/Donate" element={<Donate/>}/>
      </Routes>
    </div>
  );
}

export default App;
