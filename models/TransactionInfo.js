const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TransactionInfoSchema = new Schema(
    {
        steamId: {
            type: String,
        },
        id: {
            type: Number
        },
        username: { 
            type: String
        },
        type: {
            type: String
        },
        address: {
            type: String
        },
        value: {
            type: Number
        },
        received: {
            type: Number
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model('transactionInfo', TransactionInfoSchema);
