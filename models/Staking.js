const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StakingSchema = new Schema(
    {
        steamId: {
            type: String,
        },
        username: {
            type: String,
        },
        staking_amount: {
            type: Number
        },
        claimed: {
            type: Number
        },
        type: {
            type: String
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model('staking', StakingSchema);
