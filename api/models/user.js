const mongoose = require('mongoose');
const crypto = require('crypto');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    login: {
        type: String,
        unique: true,
        required: true
    },
    hash: String,
    salt: String
})