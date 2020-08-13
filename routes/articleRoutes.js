const articleController = require('./../controllers/article.ctrl');
const multipart = require('connect-multiparty');
const multipartWare = multipart();

module.exports = app => {
  app.get('/api/articles', articleController.getAll);
  app.post('/api/article', multipartWare, articleController.addArticle);
  app.post('/api/article/clap', articleController.clapArticle);
  app.post('/api/article/comment', articleController.commentArticle);
  app.get('/api/article/:id', articleController.getArticle);
};
