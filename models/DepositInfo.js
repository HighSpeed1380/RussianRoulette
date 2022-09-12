const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DepositInfoSchema = new Schema(
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
        username: {
            type: String
        },
        value: {
            type: Number
        },
        received: {
            type: Number
        },
        recipient: {
            type: String
        },
        txid: {
            type: String
        },
        Status: {
            type: String
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model('depositInfo', DepositInfoSchema);
