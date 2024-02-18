import logo from './logo.svg';
import './App.css';
import Feed from './component-Feed/Feed.js';
//import axios from 'axios'

// NOTE FROM STELLA: I commented this out because it was breaking the site.
//const axios = require('axios')

// If there are two parameters: id and category
const id = 123;
const category = 'electronics';

// You can add parameters directly to the URL
//axios.get(`http://127.0.0.1:8080/login`)
//  .then(response => {
    //console.log(getClientID());
//console.log(getClientSecret());
//  })
//  .catch(error => {
//    console.error(error);
//  });

function App() {
const appStyle = {
    border: '2px solid red', 
    padding: '20px',
  };

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
	//console.log(getClientID())
	//console.log(getClientSecret())
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
