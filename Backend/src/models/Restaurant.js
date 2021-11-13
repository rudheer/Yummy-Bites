const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  address: {
    type: String,
  },
  dishes: [
    {
      id: {
        type: String,
      },
      name: {
        type: String,
      },
      image: {
        type: String,
      },
      price: {
        type: Number,
      },
    },
  ],
});
module.exports = User = mongoose.model('restaurant', restaurantSchema);
