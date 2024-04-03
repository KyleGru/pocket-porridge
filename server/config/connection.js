const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_UR || '');

module.exports = mongoose.connection;
