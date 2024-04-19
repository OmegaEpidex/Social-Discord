const express = require('express');
const cors = require('cors');
const Database = require("@replit/database")
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
const db = new Database()
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

db.connect('Database', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
}).then(() => {
  console.log('Connected to database');
}).catch((error) => {
  console.error('Error connecting to database:', error);
});


app.use('/api/posts', require('./routes/postRoutes'));
app.use('/api/user', require('./routes/userRoutes'));
app.use('/api/message', require('./routes/messageRoutes'));
app.use('/api/like', require('./routes/likeRoutes'));
app.use('/api/friend', require('./routes/friendRoutes'));
app.use('/api/follower', require('./routes/followerRoutes'));
app.use('/api/following', require('./routes/followingRoutes'));
app.use('/api/comment', require('./routes/commentRoutes'));
app.use('/api/notification', require('./routes/notificationRoutes'));
app.use('/api/trend', require('./routes/trendRoutes'));


app.post('/api/posts', (req, res) => {
    
    const { content, privacy } = req.body;

   
    if (!content) {
        return res.status(400).json({ error: 'Post content is required' });
    }

    // Save the post data to the database (simulated here)
    // Replace this with your actual database logic
    // For demonstration purposes, we'll simply log the post data
    console.log('New Post:', { content, privacy });

   
    res.status(201).json({ message: 'Post created successfully' });
});


app.use((err, req, res, next) => {
  console.error('Error:', err.message);
  res.status(500).json({ error: 'Something went wrong' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

