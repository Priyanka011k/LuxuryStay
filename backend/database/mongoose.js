const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://vishwakarmapriyanka971:xrGLguJB9D1YSyr8@cluster0.8z8rbcg.mongodb.net/Priyanka', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected 🚀'))
.catch((err) => console.error('MongoDB connection error:', err));


module.exports = mongoose;



