const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RewardDistributionInfoSchema = new Schema(
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
        staked: {
            type: Number
        },
        reward: {
            type: Number
        },
        reward_percentage: {
            type: Number
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model('rewardDistributionInfo', RewardDistributionInfoSchema);
