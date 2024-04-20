import React, { useState, useEffect } from 'react';
import axios from 'axios';

const port = process.env.PORT || 3000;

const bodyParser = require('body-parser');

function App() {
  const [message, setMessage] = useState('');
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/homepage')
      .then(response => response.json())
      .then(data => setMessage(data.message))
      .catch(error => console.error('Error fetching homepage content:', error));

    // Fetch posts here
    fetch('/api/posts')
      .then(response => response.json())
      .then(data => {
        setPosts(data);
        setLoading(false);
      })
      .catch(error => console.error('Error fetching posts:', error));
  }, []);

  return (
    <div>
      <h1>Social Discord</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {posts.map((post) => (
            <div key={post.id}>
              {post.banner}
              {post.profilePicture}
              {post.userAvatar}
              <p>{post.content}</p>
              <p>{post.createdAt}</p>
              <span>Author: {post.author}</span>
              <hr/>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;