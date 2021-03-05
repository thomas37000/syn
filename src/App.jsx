import React from 'react';
import TestApi from './components/TestApi';
import Grid from './components/Grid';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="http://localhost:3000/"
          target="_blank"
          rel="noopener noreferrer"
        >
          liveWall
        </a>
      </header>
      <TestApi />
      <Grid />
    </div>
  );
}

export default App;
