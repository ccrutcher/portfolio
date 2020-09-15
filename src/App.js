import React from 'react';

import Navbar from './components/Navbar';
import Main from './sections/Main';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Main />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
