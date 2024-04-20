import React from 'react';
import ReactDOM from 'react-dom';
import App from './frontend/src/App';
import '../styles.css';

// Render the React app into a container element with the ID 'root'
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

bot();

// Access the Discord token from environment variables
const discordToken = process.env.DISCORD_TOKEN;
if (discordToken) {
  console.log('Discord token:', discordToken);
} else {
  console.error('Discord token not found in environment variables.');
}
