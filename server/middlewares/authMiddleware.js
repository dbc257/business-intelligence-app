let models = require("../models");
const jwt = require("jsonwebtoken");

function auth(req, res, next) {
  // get the headers
  const headers = req.headers["authorization"];

  if (headers) {
    // get the token
    // Bearer ADADAFAFSEFSRGRGDRF
    const token = headers.split(" ")[1];
    const decoded = jwt.verify(token, "keyboard cat");
    if (decoded) {
      const username = decoded.username;
      // check in the database if the user exists
      models.User.findOne({
        where: {
          username: username,
        },
      }).then((persistedUser) => {
        if (persistedUser) {
          // continue with the original request
          next();
        } else {
          res.json({ error: "Unauthorized Access!" });
        }
      });
    } else {
      res.json({ error: "Unauthorized Access!" });
    }
  } else {
    res.json({ error: "Authorization header not found" });
  }
}

module.exports = auth;
