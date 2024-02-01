const { Editor } = require("../DB/index");
function editorMiddleware(req, res, next) {
  // Implement user auth logic
  const username = req.headers.username; //nirmit@gmail.com
  const password = req.headers.password; //User123

  User.findOne({
    username: username,
    password: password,
  }).then(function (value) {
    if (value) {
      next();
    } else {
      res.status(403).json({
        msg: "Editor doesn't exist, Please Signup",
      });
    }
  });
}

module.exports = editorMiddleware;
