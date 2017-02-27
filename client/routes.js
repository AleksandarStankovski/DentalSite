const blogController = require('./controllers/blogController')

module.exports = function (app, config) {
  app.get('/rest/blog', blogController.getAll)
  app.get('/rest/article/:id', blogController.review)
  app.get('/*', function (req, res) {
    res.sendFile(config.rootFolder + '/public/client/app/views/index.html')
  })
}
