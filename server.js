const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });
const startups = require("./routes/startups");

const connectDB = require("./config/db");

var colors = require("colors");

const app = express();
connectDB();
app.use(express.json());

app.use("/api/startups", startups);

// const PORT = 8001;
const PORT = process.env.PORT || 8001;

const server = app.listen(
  PORT,
  console.log(`Server running in on port ${PORT}`.yellow.bold)
);
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  server.close(() => process.exit(1));
});
