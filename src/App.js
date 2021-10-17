import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import { Home } from './components/pages/Home';

function App() {
  return (
    <Router>
     {/* <Navbar /> */}
     <Home />
    </Router>
  );
}

export default App;
