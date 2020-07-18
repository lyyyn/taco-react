import React from 'react';
import './App.css';
import Header from './components/Header';
import RandomTaco from './components/RandomTaco';

function App() {
  return (
    <div className="container">
      <Header />
      <RandomTaco />
    </div>
  );
}

export default App;
