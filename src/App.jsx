import React from 'react';
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
      <Grid />
    </div>
  );
}

export default App;
