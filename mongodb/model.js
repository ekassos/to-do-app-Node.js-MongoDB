const mongoose = require('mongoose');

// MongoDb database fields
const Users = mongoose.Schema({
    name: { type: String },
    email: { type: String},
    password: { type: String},
    todo: { type: Array }
}, { versionKey: false });
module.exports.User = mongoose.model('user', Users);