import React, { useState, useEffect } from 'react';

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('../api/posts')
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
          {post.video && <video src={post.video} controls />}
          {post.image && <img src={post.image} alt={post.title} />}
          {post.share && <a href={post.share} target="_blank" rel="noopener noreferrer">Share</a>}
          {post.echo && <p>Echo: {post.echo}</p>}
        </div>
      ))}
    </section>
  );
}

export default Feed;