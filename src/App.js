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

function App() {
  return (
    <div className="App">
      <Home/>
      <About/>
      <Contact/>
      <Endorsements/>
      <Petition/>
      <Platform/>
      <Volunteer/>
      <Events/>
      <Donate/>
    </div>
  );
}

export default App;
