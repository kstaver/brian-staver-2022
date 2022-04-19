import './App.css';
import React from 'react';
import Home from './components/Body/Home/Home';
import About from './components/Body/About/About';
import Contact from './components/Body/Contact/Contact';
import Endorsements from './components/Body/Endorsements/Endorsements';
import Petition from './components/Body/Petition/Petition';
import Platform from './components/Body/Platform/Platform';
import Volunteer from './components/Body/Volunteer/Volunteer';
import Events from './components/Body/Events/Events';
import Donate from './components/Body/Donate/Donate';
import {Routes, Route} from 'react-router-dom';
import Navbar from './components/NavBar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
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
      <Footer/>
    </div>
  );
}

export default App;
