import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
const port = process.env.PORT || 3000
app.listen(port, () => {
  res.render('..public/index.html');
  console.log(`Server is running on port ${port}`);
})
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
function App() {
const [message, setMessage] = useState('');

    useEffect(() => {
      fetch('/api/homepage')
        .then(response => response.json())
        .then(data => setMessage(data.message))
        .catch(error => console.error('Error fetching homepage content:', error));
    }, []);

    return (
      <div className="App">
        <h1>{message}</h1>
        {/* Add your other React components and logic here */}
      </div>
    );
  }
fetchPosts();
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