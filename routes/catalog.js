const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const userController = require('../controllers/userController');

router.post('/api/posts', postController.post_list);
router.post('/api/post', postController.get_post);
router.post('/api/sign-up', userController.sign_up);
router.post('/api/login', userController.log_in);
router.post('/api/create-post', postController.create_post);
router.get('/api/global-posts', postController.global_posts);
router.post('/api/comment', postController.create_comment);




module.exports = router;
