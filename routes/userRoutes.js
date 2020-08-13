const userController = require('./../controllers/user.ctrl');

module.exports = app => {
  app.get('/api/user/:id', userController.getUser);
  app.get('/api/user/profile/:id', userController.getUserProfile);
  app.post('/api/user', userController.addUser);
  app.post('/api/user/follow', userController.followUser);
};
