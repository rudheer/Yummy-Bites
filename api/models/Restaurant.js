const mongoose = require('mongoose');

const RestaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required:true
  },
  email: {
    type: String,
    required:true
  },
  password: {
    type: String,
    required:true
  },
  address: {
    type: String,
    required:true
  },
  photo:{
      type:String,
      required:false
  },
  resdec:{
      type:String,
      required:false
  },
  dishes: [
    {
      id: {
        type: String,
        required:false
      },
      name: {
        type: String,
        required:true
      },
      image: {
        type: String,
        required:false
      },
      price: {
        type: Number,
        required:true
      },
      dishdec:{
          type:String,
          required:false
      }
    },
  ],
});
module.exports =  mongoose.model('restaurant', RestaurantSchema);