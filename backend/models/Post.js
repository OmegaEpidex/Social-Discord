const Database = require("@replit/database")

const postSchema = new db.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: db.Schema.Types.ObjectId, ref: 'User', required: true },
  createdAt: { type: Date, default: Date.now }
});

const Post = db.model('Post', postSchema);

module.exports = Post;

