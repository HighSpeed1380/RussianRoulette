const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GameInfoSchema = new Schema(
    {
        steamId: {
            type: String,
        },
        game_id: {
            type: Number
        },
        game: {
            type: String
        },
        type: {
            type: String
        },
        players: {
            type: Number
        },
        wagered: {
            type: Number
        },
        result: {
            type: Number
        },
        payout: {
            type: Number
        },
        username: {
            type: String
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model('gameInfo', GameInfoSchema);
