const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost:27017/blog_mern');

// mongoose.connection.on('connected', () => {
//     console.log('connected to mongoDB');
// });
// mongoose.connection.on('error', (err) => {
//     console.log('error connected to mongodb:', err);
// });

const connectDB = async () => {
    try {
      await mongoose.connect('mongodb://localhost:27017/blog_mern');
      console.log('Connected to MongoDB');
    } catch (err) {
      console.error('Error connecting to MongoDB:', err);
    }
  };
  
  connectDB();

module.exports = mongoose;