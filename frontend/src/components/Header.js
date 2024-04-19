import React from 'react';

const Header = () => {
  return (
    <header className="site-header">
      <h1>Social Discord</h1>
      {
          <nav className="main-nav">
            <ul>
              <li><a href="#profile">Profile</a></li>
              <li><a href="#friend"</a></li>
              <li><a href="#following"</a></li>
              <li><a href="#follower"</a></li>
              <li><a href="#feed">Social</a></li>
              <li><a href="#message">Messages</a></li>
              <li><a href="#comment">Comments</a></li>
              <li><a href="#echo">Echos</a></li>  
            </ul>
          <div class="auth-button">
          <button class="auth-button">
            Sign in
          </button>
          <button class="auth-button">
            Sign up
          </button>
          </div>
    }
    </header>
  );
};

export default Header;
