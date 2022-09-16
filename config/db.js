require("dotenv").config();
const mongoose = require("mongoose");
// const config = require('config');
// const db = config.get("mongoURI");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connected...");

    const connection = mongoose.connection;
    connection.on("open", () => {
      console.log("MongoDB database connection established successfully");
    });
  } catch (err) {
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
