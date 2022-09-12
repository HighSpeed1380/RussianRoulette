const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UnstakeInfoSchema = new Schema(
    {
        steamId: {
            type: String,
        },
        id: {
            type: Number
        },
        transaction: { 
            type: String
        },
        type: {
            type: String
        },
        pool: {
            type: String
        },
        username: {
            type: String
        },
        value: {
            type: Number
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model('unstakeInfo', UnstakeInfoSchema);
