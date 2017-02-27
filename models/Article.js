const mongoose = require('mongoose')

var articleSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true,
    default: Date.now
  }
})

const Article = mongoose.model('Article', articleSchema)

module.exports = Article
