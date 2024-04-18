import React, { useState, useEffect } from 'react';

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://api.example.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.error('Error fetching posts:', error));
  }, []);

  return (
    <section id="social">
      {posts.map(post => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          {/* Add more post details and interactions here */}
        </div>
      ))}
    </section>
  );
}

export default Feed;