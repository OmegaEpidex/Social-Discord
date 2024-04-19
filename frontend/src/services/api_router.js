import axios from 'axios';

const API = 'API_BaseURL'; 

const api = axios.create({
  baseURL: '/',
});

export const fetchPosts = async () => {
  try {
    const response = await api.get('/api/posts');
    return response.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};


export const createPost = async (postData) => {
  try {
    const response = await api.post('/api/posts', postData);
    return response.data;
  } catch (error) {
    console.error('Error creating post:', error);
    throw error;
  }
};

// Add more functions to interact with other backend routes as needed

export default api;
