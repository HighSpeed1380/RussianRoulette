const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BetsInfoSchema = new Schema(
    {
        steamId: {
            type: String,
        },
        name: {
            type: String,
        },
        BetId: {
            type: String,
        },
        Value: {
            type: Number,
        },
        TransactionID: {
            type: String,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model('betsinfo', BetsInfoSchema);
