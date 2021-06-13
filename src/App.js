import React from 'react';

import Navbar from './components/Navbar';
import Main from './components/Main';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Main />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
