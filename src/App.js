import './App.css';
import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Endorsements from './components/Endorsements';
import Petition from './components/Petition';
import Platform from './components/Platform';
import Volunteer from './components/Volunteer';
import Events from './components/Events';
import Donate from './components/Donate';
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
