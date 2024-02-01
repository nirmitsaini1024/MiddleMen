const { Admin } = require("../DB/index");

function adminMiddleware(req, res, next) {
  // Implement admin auth logic

    const username = req.headers.username; //nirmit@gmail.com
    const password = req.headers.password; //Admin123

    Admin.findOne({
        username: username,
        password: password,
      }).then(function (value) {
        if (value) {
          next();
        } else {
          res.status(403).json({
            msg: "Admin doesn't exist, Please Signup",
          });
        }
      });
}

module.exports = adminMiddleware;
