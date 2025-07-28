const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
     firstName: {
         type: String, required: true 
        },
  middleName: String,
  lastName: {
     type: String, required: true
     },
  email: {
     type: String, required: true, unique: true
     },
  password: {
     type: String, required: true 
    },
  contact: { 
   type: String }  
   },
    { timestamps: true 
});

userSchema.virtual('fullName').get(function () {
  return `${this.firstName} ${this.middleName || ''} ${this.lastName}`.trim();
});

userSchema.set('toJSON', { virtuals: true });


const userdata = mongoose.model('user', userSchema);
module.exports = userdata;
