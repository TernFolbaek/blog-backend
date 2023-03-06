const User = require('../models/user');


exports.log_in = (req, res, next) => {
  User.findOne(
    { username: req.body.username, password: req.body.password },
    function (err, rs) {
      if (err) {
        console.log(err);
      } else if (rs == null) {
        res.send(false);
      } else {
        res.json({ boolean: true, info: rs._id });
      }
    }
  );
};

exports.sign_up = (req, res, next) => {
  console.log(req.body.username);
  console.log(req.body.password);

  const user = new User({
    username: req.body.username,
    password: req.body.password,
  }).save((err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log('not error');
  });
};
