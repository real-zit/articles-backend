const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ArticleSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    snippet: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      requires: true,
    },
    author: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Article = mongoose.model('Article', ArticleSchema);
module.exports = Article;
