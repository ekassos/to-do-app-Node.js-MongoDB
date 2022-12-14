const mongoose = require('mongoose');
const settings = require('../controllers/settings')

// manage MongoDb connection
function connectMongoDb() {
    mongoose.connect(settings.dbURI, { 
      useNewUrlParser: true, 
      useUnifiedTopology: true
    });
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', () => {
      console.log('[INFO] Successfully connected to database!');
    });
}

module.exports.connectMongoDb = connectMongoDb