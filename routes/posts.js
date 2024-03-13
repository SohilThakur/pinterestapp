const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/pinterestapp");

// Define the post schema
const postSchema = new mongoose.Schema({
  imageText: {
    type: String,
    required: true,
  },

  image:{
    type: String
  },

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },

  likes: {
    type: Array,
    default: [],
  },
});

// Create the post model
module.exports = mongoose.model("Post", postSchema);
