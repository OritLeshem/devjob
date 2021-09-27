const mongoose = require("mongoose");

const connectDB = async () => {
  const conn = await mongoose.connect(
    "mongodb+srv://admin:admin@cluster0.v3lv4.mongodb.net/dev3?retryWrites=true&w=majority"
  );
  console.log(`mongoDB conected ${conn.connection.host}`);
};
module.exports = connectDB;
