const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    steamId: {
      type: String,
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
    avatar: {
      type: String,
    },
    banned: {
      status: {
        type: Boolean,
        default: false
      },
      interval: {
        type: Number
      }
    },
    role: {
      type: Number,
      default: 0
    },
    balance: {
      type: Number,
      default: 0
    },
    betted: {
      type: Number,
      default: 0
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('users', UserSchema);
