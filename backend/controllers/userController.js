const User = require('../models/User');


const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}, '-password');response
    res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Something went wrong' });
  }
};


const getUserById = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId, '-password');

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json(user);
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ error: 'Something went wrong' });
  }
};

const createUser = async (req, res) => {
  try {
    
    const { name, email, password } = req.body;

    
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ error: 'Email already exists' });
    }

    const newUser = new User({ name, email, password });
    await newUser.save();
    
    const savedUser = newUser.toObject();
    delete savedUser.password;

    res.status(201).json(savedUser);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Something went wrong' });
  }
};


const updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    
    const updatedFields = req.body;

    const updatedUser = await User.findByIdAndUpdate(userId, updatedFields, {
      new: true, 
      runValidators: true, 
    });

    if (!updatedUser) {
      return res.status(404).json({ error: 'User not found' });
    }

    
    const savedUser = updatedUser.toObject();
    delete savedUser.password;

    res.json(savedUser);
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ error: 'Something went wrong' });
  }
};


const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const deletedUser = await User.findByIdAndDelete(userId);

    if (!deletedUser) {
      return res.status(404).json({ error: 'User not found' });
    }

   
    const removedUser = deletedUser.toObject();
    delete removedUser.password;

    res.json(removedUser);
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ error: 'Something went wrong' });
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
