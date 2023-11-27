
const express = require('express');
const blogController = require('../Controller/blogController');
const router = express.Router();

router.get('/', blogController.blog_index);
router.post('/',blogController.blog_creat_post);
router.get('/create', blogController.blog_creat_get );
router.get('/:id',blogController.blog_details);
router.delete('/:id',blogController.blog_delete)

module.exports = router;
