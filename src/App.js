import logo from './logo.svg';
import docker_logo from './docker-logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <img src={docker_logo} className="Docker-logo" alt='dlogo' />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          This React app is running in a Docker container!
        </a>
      </header>
    </div>
  );
}

export default App;
