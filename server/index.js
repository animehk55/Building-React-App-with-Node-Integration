const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');


mongoose.connect('mongodb://oauthstephen:animeshk55@ds249092.mlab.com:49092/oauthstephen', { useNewUrlParser: true });

const app = express();

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
