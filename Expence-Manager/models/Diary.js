const mongoose = require("mongoose");

const diarySchema = new mongoose.Schema({
  userid: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  date: {
    type: Date, 
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const DiaryEntry = mongoose.model("DiaryEntry", diarySchema);

module.exports = DiaryEntry;
