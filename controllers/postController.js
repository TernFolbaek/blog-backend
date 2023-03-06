const Post = require('../models/post');

exports.create_post = (req, res, next) => {
  const post = new Post({
    title: req.body.title,
    text: req.body.text,
    user: req.body.user,
  }).save((err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log('not error');
  });
};

exports.create_comment = (req, res, next) => {
  console.log('in request');
  Post.findByIdAndUpdate(
    req.body.id,

    { $push: { comments: req.body.comment } },
    function (error, user) {
      if (error) {
        res.send({ info: error });
        return;
      } else {
        res.send({ info: 'nice' });
      }
    }
  );
};

exports.global_posts = (req, res, next) => {
  Post.find().exec((err, list_post) => {
    if (err) {
      return next(err);
    }
    //Successful, so render
    res.send({
      post_list: list_post,
    });
  });
};

exports.post_list = (req, res, next) => {
  Post.find({ user: req.body.user }).exec((err, list_post) => {
    if (err) {
      return next(err);
    }
    //Successful, so render
    res.send({
      post_list: list_post,
    });
  });
};

exports.get_post = (req, res, next) => {
  Post.find({ _id: req.body.id }).exec((err, post) => {
    if (err) {
      return next(err);
    }
    //Successful, so render
    res.send({
      post: post,
    });
  });
};
