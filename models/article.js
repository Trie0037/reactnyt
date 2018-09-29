const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create article schema
var ArticleSchema = new Schema({
  url: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
    //required: true
  }
});

// Create the Article model with the ArticleSchema
var Article = mongoose.model("Article", ArticleSchema);

// Export the model
module.exports = Article;