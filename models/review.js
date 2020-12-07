const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  fullName: {
    type: String,
    required: true,
  },
  emailID: {
    type: String,
    required: true,
  },
  Phone : {
    type: Number,
    required: true,
  },
  Review: {
      type: String,
      required: true,
  }
}, { timestamps: true });

const review = mongoose.model('review', reviewSchema);
module.exports = review;