require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const app = express();

//API security
app.use(helmet());

//handle cors error
app.use(cors());

//Logger
app.use(morgan("tiny"));

// Connect Database
connectDB();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

// Init Middleware
app.use(express.json());

// Uploads routes
app.use("/uploads/", express.static("uploads"));

// Define Routes
app.use("/api/auth", require("./routes/api/authRoute"));
app.use("/api/betinfo", require("./routes/api/betinfo"));
app.use("/api/userinfo", require("./routes/api/userinfo"));
app.use("/api/gameinfo", require("./routes/api/gameinfo"));
app.use("/api/staking", require("./routes/api/staking"));
app.use("/api/transactioninfo", require("./routes/api/transactioninfo"));
app.use("/api/depositinfo", require("./routes/api/depositinfo"));
app.use("/api/withdrawinfo", require("./routes/api/withdrawinfo"));
app.use("/api/swapinfo", require("./routes/api/swapinfo"));
app.use("/api/unstakeinfo", require("./routes/api/unstakeinfo"));
app.use(
  "/api/rewardDistributioninfo",
  require("./routes/api/rewardDistributioninfo")
);
app.use("/api/rewardinfo", require("./routes/api/rewardinfo"));

app.use("/api/serverSeedinfo", require("./routes/api/serverSeedinfo"));

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

// app.use("*", (req, res, next) => {
//   const error = new Error("Resource not found");
//   error.status = 404;
//   next(error);
// });

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
