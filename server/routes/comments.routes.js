const { Router } = require('express');
const { create } = require('../controllers/comment.controller');
const router = Router();

module.exports = router;

// /api/comment
router.post('/', create);
