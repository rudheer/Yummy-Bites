const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  orders: [
    {
      restaurant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'restaurant',
      },
      dishes: [
        {
          dishID: {
            type: String,
          },
        },
      ],
    },
  ],
  lat: {
    type: String,
  },
  lon: {
    type: String,
  },
});

module.exports = User = mongoose.model('user', userSchema);
