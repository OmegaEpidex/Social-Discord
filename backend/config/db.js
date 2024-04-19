const { create } = require('@replit/database');
const db = create();

const connectDB = async () => {
  try {
    console.log('Connecting to database...');
    await db.get('');
    console.log('Connected to database');
  } catch (error) {
    console.error('Error connecting to database:', error);
    process.exit(1);
  }
};

module.exports = connectDB;