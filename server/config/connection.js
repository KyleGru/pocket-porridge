const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_UR || 'mongodb://127.0.0.1.27017/pocket-porridge');

module.exports = mongoose.connection;