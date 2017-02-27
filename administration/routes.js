const blogController = require('./controllers/blogController')

module.exports = function (app, config) {
  app.post('/administration/rest/blog/create', blogController.create)
  app.get('/administration/rest/blog', blogController.getAll)
  app.get('/administration/rest/blog/edit/:id', blogController.review)
  app.post('/administration/rest/blog/edit', blogController.edit)
  app.delete('/administration/rest/blog/remove/:id', blogController.remove)
  app.get('/administration/*', function (req, res) {
    res.sendFile(config.rootFolder + '/public/administration/app/views/index.html')
  })
}
