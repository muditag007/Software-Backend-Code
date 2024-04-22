// This file is responsible for setting up the connection to MongoDB

const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost:27017/voting_system', { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log('Connected to MongoDB'))
//     .catch(err => console.error('Error connecting to MongoDB:', err));


const connection = mongoose.createConnection(`mongodb://127.0.0.1:27017/votingSystem`).on('open',()=>{console.log("MongoDB Connected");}).on('error',()=>{
        console.log("MongoDB Connection error");
});
    
module.exports = connection;