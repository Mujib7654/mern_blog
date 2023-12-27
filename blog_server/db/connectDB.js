const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/blog_mern');

mongoose.connection.on('connected', () => {
    console.log('connected to mongoDB');
});
mongoose.connection.on('error', (err) => {
    console.log('error connected to mongodb:', err);
})