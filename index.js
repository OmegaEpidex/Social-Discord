import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Import the root component of your application
import '../index.css'; // Import the CSS file for styling (if applicable)
require('../app.js');
        
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

console.process.env(DISCORD_TOKEN);