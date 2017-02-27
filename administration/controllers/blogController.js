const Article = require('mongoose').model('Article')
var perPage = 3

module.exports = {
  getAll: function (req, res) {
    var page = req.query.page || 1
    var sortDate = req.query.sortDate
    Article.find({}).count().then(function (count) {
      var countPage = Math.ceil(count / perPage)
      Article.find({})
        .skip(perPage * (page - 1))
        .limit(perPage).sort({date: sortDate})
        .then(function (articles) {
          res.json({countPage: countPage, articles: articles})
        })
    })
  },

  create: function (req, res) {
    var article = req.body
    Article.create(article).then(function (result) {
      res.json('Success')
    }, function (error) {
      res.status(400).send(error)
    })
  },

  review: function (req, res) {
    var id = req.params.id
    Article.findById(id).then(function (article) {
      res.json(article)
    })
  },

  edit: function (req, res) {
    var newArticle = req.body
    Article.findById(newArticle._id).then(function (article) {
      article.title = newArticle.title
      article.content = newArticle.content
      article.date = newArticle.date
      article.save().then(function (result) {
        res.json('Success')
      }, function (error) {
        res.status(400).send(error)
      })
    })
  },

  remove: function (req, res) {
    var id = req.params.id
    Article.remove({_id: id}).then(function (result) {
      res.json('Success')
    }, function (error) {
      res.status(400).send(error)
    })
  }
}
