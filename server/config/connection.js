const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_UR || 'mongodb+srv://smithz852:pocketporridge@cluster0.fvh802f.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

//pocketporridge

module.exports = mongoose.connection;