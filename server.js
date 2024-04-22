const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const PORT = process.env.PORT || 3000;

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/', routes);

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/voting_system', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
        // Start the server after connecting to MongoDB
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch(err => console.error('Error connecting to MongoDB:', err));

module.exports = app;
