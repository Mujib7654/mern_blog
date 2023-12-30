require('dotenv').config();
const mongoose = require('mongoose');

const dbUri = process.env.DB_URI;

//1st way
// mongoose.connect(dbUri);

// mongoose.connection.on('connected', () => {
//     console.log('connected to mongoDB');
// });
// mongoose.connection.on('error', (err) => {
//     console.log('error connected to mongodb:', err);
// });

//2nd way
const connectDB = async () => {
    try {
      await mongoose.connect(dbUri);
      console.log('Connected to MongoDB');
    } catch (err) {
      console.error('Error connecting to MongoDB:', err);
    }
  };
  
  connectDB();

module.exports = mongoose;