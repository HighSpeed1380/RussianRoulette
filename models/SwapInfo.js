const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SwapInfoSchema = new Schema(
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
        fee_percentage: {
            type: Number
        },
        fee: {
            type: Number
        },
        received: {
            type: Number
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model('swapInfo', SwapInfoSchema);
