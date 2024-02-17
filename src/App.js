import logo from './logo.svg';
import './App.css';
import Feed from './component-Feed/Feed.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is working! :D<br></br>
          Save App.js to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <body className="App-header">
        <Feed />
      </body>
    </div>
  );
}

export default App;
