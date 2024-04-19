import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '../styles.css';
import bot from './Social Discord/frontend/AI/Bot/bot.js';
import { server } from 'http';
require('../app.js');

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
bot()
console.process.env(DISCORD_TOKEN);