const Article = require('mongoose').model('Article')

module.exports = {
  getAll: function (req, res) {
    Article.find({}).then(function (articles) {
      res.json(articles)
    })
  },
  review: function (req, res) {
    var id = req.params.id
    Article.findById(id).then(function (article) {
      res.json(article)
    })
  }
}
