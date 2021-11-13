const jwt = require('jsonwebtoken');
const User = require('../model/User');
const Restaurant = require('../models/Restaurant');

const auth = async (req, res, next) => {
  const token = req.header('auth-token');
  if (!token) return res.status(401).send('Access Denied');

  try {
    const verified = jwt.verify(token, process.env.SECRET);
    if (verified.role === 'user') {
      const user = await User.findOne({ _id: verified._id });
      if (!user) return res.status(401).send('Access Denied');
      next();
    } else if (verified.role === 'restaurant') {
      const restaurant = await Restaurant.findOne({ _id: verified._id });
      if (!restaurant) return res.status(401).send('Access Denied');
      next();
    } else {
      return res.status(401).send('Access Denied');
    }
  } catch (error) {
    res.status(400).send('Invalid Token');
  }
};

module.exports = auth;
