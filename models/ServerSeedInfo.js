const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ServerSeedInfoSchema = new Schema(
    {
        steamId: {
            type: String,
        },
        id: {
            type: Number
        },
        serverSeedHash: { 
            type: String
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model('serverSeedInfo', ServerSeedInfoSchema);
