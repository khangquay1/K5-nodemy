const mongoose = require('mongoose');

mongoose.set('strictQuery', true);

mongoose.connect('mongodb://127.0.0.1/K5_Nodemy_DB');

const Schema = mongoose.Schema;

const accountSchema = new Schema({
    'username': String,
    'password': String
}, {
    collection: 'account'
});

const accountModel = mongoose.model('acccount', accountSchema);

module.exports = accountModel;