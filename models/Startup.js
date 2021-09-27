// const mongoose = require("mongoose");

// const StartupSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: [true, "please add a name"],
//     maxLength: [50, "name cannot exceed 50 characters"],
//   },
//   description: {
//     type: String,
//     required: [true, "please add a description"],
//     maxLength: [50, "description cannot exceed 50 characters"],
//   },
//   address: {
//     type: String,
//     required: [true, "please add a address"],
//   },
//   website: {
//     type: String,
//     required: [true, "please add a website"],
//   },
//   phone: {
//     type: String,
//     maxLength: [12, "phone cannot exceed 12 characters"],
//   },
//   email: {
//     type: String,
//     maxLength: [25, "phone cannot exceed 12 characters"],
//   },
//   jobs: {
//     type: [String],
//     required: [true, "please add a list of jobs"],
//     enum: ["fullstack", "frontend", "backend"],
//   },
//   remote: {
//     type: Boolean,
//     default: false,
//   },
//   createAt: {
//     type: Date,
//     default: Date.now,
//   },
// });
// module.exportsmongoose.model(Startup, StartupSchema);
