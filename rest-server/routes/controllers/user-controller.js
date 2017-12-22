const { Users } = require('../../sql/models/index.js');

const UserController = {
  signup: (req, res) => {
    console.log(req.url, req.body);
    Users.create({
      username: req.body.username,
      password: req.body.password
    })
      .then(() => {
        res.status(201).send('request');
      })
      .catch((err) => {
        res.status(500).send('server error in signup', err);
      })
  },
  // test: (req, res) => {
  //   console.log(req.url, req.body);
  //   res.status(200).send('get handler');
  // },
}

module.exports = UserController;