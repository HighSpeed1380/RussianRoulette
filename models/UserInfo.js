const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserInfoSchema = new Schema(
    {
        steamId: {
            type: String,
        },
        id: {
            type: Number
        },
        username: {
            type: String,
        },
        email: {
            type: String
        },
        password: {
            type: String
        },
        role: {
            type: String
        },
        level: {
            type: Number
        },
        balance: {
            type: Number
        },
        generatedAddress: {
            type: String
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model('userinfo', UserInfoSchema);
