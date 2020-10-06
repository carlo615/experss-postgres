const db = require("../Models");
const UserGame = db.userGame;

// create and save a new user game
exports.create = (req, res) => {
  if (!req.body.username) {
    res.status(400).send({
      message: "please fill, can't empty",
    });
    return;
  }

  // create user
  const user = {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  };

  UserGame.create(user)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "found error while creating user",
      });
    });
};
