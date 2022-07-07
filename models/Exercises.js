const mongoose = require("mongoose");

const ExerciseSchema = new mongoose.Schema({
  fileUrl: {
    type: String,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  category: {
    type: [String],
  },
  likes: {
    type: Number,
    default: 0,
  },
  dislikes: {
    type: Number,
    default: 0,
  },
  shares: {
    type: Number,
    default: 0,
  },
  _exerciseImg: {
    type: String,
  },
  views: {
    type: Number,
    default: 0,
  },
  downloads: {
    type: Number,
    default: 0,
  },
});

module.exports =
  mongoose.models.exercises || mongoose.model("exercises", ExerciseSchema);
