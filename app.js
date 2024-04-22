const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const userRoutes = require('./router/userRoutes');
const partyRoutes = require('./router/partyRoutes');
const voteRoutes = require('./router/voteRoutes');

const app = express();
const PORT = process.env.PORT || 3000;