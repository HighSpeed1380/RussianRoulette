const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserInfoSchema = new Schema(
  {
    steamId: {
      type: String,
    },
    id: {
      type: Number,
    },
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    level: {
      type: Number,
    },
    balance: {
      type: Number,
    },
    generatedAddress: {
      type: String,
    },
    refreshJWT: {
      token: {
        type: String,
        default: "",
      },
      addedAt: {
        type: Date,
        required: true,
        default: Date.now(),
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("userinfo", UserInfoSchema);
