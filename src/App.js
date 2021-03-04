import "./App.css";
import TestApi from "./components/TestApi";

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
    </div>
  );
}

export default App;
