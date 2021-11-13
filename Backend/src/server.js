const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

dotenv.config();
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

//middlewares
app.use(express.json());

//routes
app.get('/', (req, res) => {
  res.send('Namaste!');
});

//server
app.listen(process.env.PORT, () => {
  console.log(`Server Up and Running 🚀🚀 on PORT: ${process.env.PORT}`);
});
