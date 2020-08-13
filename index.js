const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cloudinary = require('cloudinary');
const keys = require('./config/keys');
require('./models/User');
require('./models/Article');

const app = express();

cloudinary.config({
  cloud_name: keys.cloudinaryCloudName,
  api_key: keys.cloudinaryApiKey,
  api_secret: keys.cloudinaryApiSecret
});

try {
  mongoose.connect(keys.mongoURI);
} catch (err) {
  console.log(err);
}

let port = process.env.PORT || 5000;

/** set up routes {API Endpoints} */
require('./routes/articleRoutes')(app);
require('./routes/userRoutes')(app);

/** set up middlewares */
app.use(cors());
app.use(bodyParser.json());
app.use(helmet());
//app.use('/static', express.static(path.join(__dirname, 'static')))

/** start server */
app.listen(port, () => {
  console.log('Server started at port: ' + port);
});
